document.getElementById("radius-slider").addEventListener("input", function() {
  var sliderValue = document.getElementById("radius-slider").value;
  console.log(sliderValue);
});

document.querySelector(".halal-checkbox-slider").addEventListener("input", function() {
  let halalValue = document.querySelector('.halal-checkbox-slider').value;
  console.log(halalValue);
})

const locationName = document.querySelector('#locationResult');
const locationRating = document.querySelector('#rating');
const locationAddress = document.querySelector('#address');
const locationImage = document.querySelector('#locationImage');
const border = document.querySelector('#changes-div');
const finding = document.querySelector('.finding');
const prevResult = document.querySelector('.prev-result');


// document.querySelector("#halal-checkbox").addEventListener("input", function(){
//   if(this.checked) {
//       console.log("Checkbox is checked, value is " + this.value);
//     } else {
//       console.log("Checkbox is unchecked");
//     }
// })

// Creating map
let lat = 1;
let lon = 1;
let destination = '';

// Repeat render map
function checkMapRendered() {
  const map = document.getElementById("map");
  if (!map) {
    setTimeout(checkMapRendered, 500); // call the function again after 500ms delay
    return;
  }
  initMap();
}

checkMapRendered();


function initMap(destination) {
  console.log(lat, lon);
  navigator.geolocation.getCurrentPosition(function(position) {
      lat = position.coords.latitude;
      lon = position.coords.longitude;
      console.log(lat, lon);
  const directionsService = new google.maps.DirectionsService();
  const origin = new google.maps.LatLng(lat, lon);
  destination = destination;

  // The location of Uluru
  const userLocation = { lat: lat, lng: lon };
  // The map, centered at Uluru
  const map = new google.maps.Map(document.getElementById("map"), {
    zoom: 14,
    center: userLocation,
    scrollwheel: true
  });

  const marker = new google.maps.Marker({
      position: userLocation,
      map: map,
    });

  const request = {
      origin: origin,
      destination: destination,
      travelMode: google.maps.TravelMode.DRIVING
  };
  
  directionsService.route(request, function(result, status) {
      if (status == google.maps.DirectionsStatus.OK) {
        // Add the route to the map
        const directionsRenderer = new google.maps.DirectionsRenderer();
        directionsRenderer.setMap(map);
        directionsRenderer.setDirections(result);
      }
    });
}, function error(err) {
  console.log(err);
}, {enableHighAccuracy: true})

}




// Fetch function
const getNewData = function(event) {
if (event) {
  event.preventDefault();
}
document.querySelector('#error').innerText = "";

// Get the form data as a FormData object
const formData = new FormData(form);

console.log(formData, typeof formData);

const jsonData = {};
formData.forEach((value, key) => {
  jsonData[key] = value;
});
jsonData.latitude = lat;
jsonData.longitude = lon;
fetch('/submit', {
  method: 'POST',
  body: JSON.stringify(jsonData),
  headers: {
    'Content-Type': 'application/json'
  }
})
.then(response => response.json())
.then(data => {
  console.log(data);
  finding.style.display = 'none';
  locationName.innerHTML = data.result.name;
  locationRating.innerHTML = `Rating: ` + data.result.rating.toString() + ` &#9733;`;
  locationAddress.innerHTML = data.result.formatted_address;

  const photo_reference = data.result.photos[0].photo_reference;
  // console.log(photo_reference);
  return photo_reference;
  console.log(data.result.place_id, data.result.name, data.result.rating, data.result.formatted_address);
  console.log(typeof data.result.place_id, typeof data.result.name, typeof data.result.rating, typeof data.result.formatted_address);


})
.then(photo_id => {
  console.log(photo_id);
  // Fetch picture
  fetch('/photo', {
    method: 'POST',
    body: JSON.stringify({ photo_id: photo_id }),
    headers: {
      'Content-Type': 'application/json'
    }
  })
  .then(response => response.json())
  .then(data => {
    console.log(data.message);
    locationImage.src = data.message;
    locationImage.style.display = 'inline-block';
    
    prevResult.style.display = 'inline-block';
  
  })
  .catch(error => {
    console.log(error);
    document.querySelector('#error').innerText = "Can't find anything, automatically trying again!";
  })
})
.catch(error => {
  console.log(error)
  document.querySelector('#error').innerText = "Can't find anything, automatically trying again!";
  return getNewData();
});


}

// Display finding text
const displayFinding = function() {
  finding.style.display = 'block';
}
// Hide previous result
const hidePrevResult = function() {
  prevResult.style.display = 'none';
}

// Add event listener
const form = document.querySelector('#form');
form.addEventListener('submit', getNewData);
form.addEventListener('submit', displayFinding);
form.addEventListener('submit', hidePrevResult);



// // Get the H3 element
const h3Element = document.querySelector('#address');

// Create a new MutationObserver
const observer = new MutationObserver(function(mutations) {
mutations.forEach(function(mutation) {
  // Check if the H3 element has been modified
  if (mutation.type === 'childList' && mutation.target === h3Element) {
    // Call your function here
    destination = document.querySelector('#address').innerText;
    console.log(destination);

    initMap(destination);
  }
});
});

// Start observing the H3 element for changes
observer.observe(h3Element, { childList: true });

window.initMap = initMap;
