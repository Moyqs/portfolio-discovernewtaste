const express = require('express');
const bodyParser = require('body-parser');
const https = require('https'); 
const { keywords, halalKeywords }= require('./keywords');


// Setting up express function
const app = express();

// using public, ejs view engine, bodyparser
app.set('view engine', 'ejs');
app.use(express.static("public"));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());


// API Details ********************************************************************************
const apiKey = 'AIzaSyDnUdsn2VCnZNmJg7YMQqMi3OAg1IgX4R8'
const apiUrl = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json?'

app.get('/', function(req, res){
    res.render('index');
})

app.post('/submit', function(req, res){
    // console.log(req.body.radiusName, typeof req.body.radiusName);
    // console.log(req.body.halalName, typeof req.body.halalName);
    const radius = Number(req.body.radiusName);
    const latitudeString = req.body.latitude.toString();
    const longitudeString = req.body.longitude.toString();
    console.log(latitudeString, longitudeString);
    console.log(req.body.halalSlider);
    const halal = req.body.halalSlider ? 'halal' : '';
    if (halal === 'halal') {
        randomKeyword = halalKeywords[Math.floor(Math.random() * (halalKeywords.length - 1))] + '%20';
    } else {
        randomKeyword = keywords[Math.floor(Math.random() * (keywords.length - 1))];
    }
    console.log(randomKeyword);
    const keyword =  randomKeyword + halal
    const output = 'json';
    const location = `${latitudeString}%2C${longitudeString}`; //Need to change
    const openNow = true;

    queryUrl = `${apiUrl}location=${location}&key=${apiKey}&radius=${radius}&keyword=${keyword}&opennow=${openNow}&type=restaurant`
    console.log(queryUrl);

    const apiPromise = new Promise((resolve, reject) =>{
        https.get(queryUrl, function(response){
            console.log(response.statusCode);
            let jsonString = '';
    
            response.on("data", function(chunk){
                jsonString += chunk.toString();
            });
    
            response.on('end', () => {
                try {
                  const jsonData = JSON.parse(jsonString);
                    // console.log(jsonData, typeof jsonData, jsonData.results);
                    resolve(jsonData);
                } catch (error) {
                  console.error("Error parsing JSON: ", error);
                  reject(error);

                }
              });
        }).on('error', (error) => {
            console.error("Error making API request: ", error);
            reject(error);
          });
    })
    
    apiPromise
    .then((jsonData) => {
        // console.log(jsonData, typeof jsonData, jsonData.results);
        const randomIndex = Math.floor(Math.random() * (jsonData.results.length))
        // console.log(jsonData.results[randomIndex].name);
        // console.log(jsonData.results[randomIndex].rating);
        // console.log(jsonData.results[randomIndex].opening_hours.open_now);
        const placeID = jsonData.results[randomIndex].place_id;
      
        // Making another api request
        const detailsPromise = new Promise((resolve, reject) => {
            const queryUrlDetails = `https://maps.googleapis.com/maps/api/place/details/json?fields=name%2Cformatted_address%2Cphoto%2Cplace_id%2Copening_hours%2Crating&place_id=${placeID}&key=${apiKey}`;
            console.log(queryUrlDetails);
            https.get(queryUrlDetails, (response) => {
              let jsonString = '';
        
              response.on('data', (chunk) => {
                jsonString += chunk.toString();
              });
        
              response.on('end', () => {
                try {
                  const jsonDataDetails = JSON.parse(jsonString);
                  resolve(jsonDataDetails);
                } catch (error) {
                  console.error('Error parsing JSON: ', error);
                  reject(error);
                }
              });
            }).on('error', (error) => {
              console.error('Error making API request: ', error);
              reject(error);
            });
          });
        
          detailsPromise.then((jsonDataDetails) => {
            res.send(jsonDataDetails);
            // console.log(jsonDataDetails.result.photos);
          }).catch((error) => {
            console.error('Error making API request: ', error);
            res.status(500).send('Error making API request');
          });

    }).catch((error) => {
        console.error("Error making API request: ", error);
        res.status(500).send('Error making API request');
      });
    });


// Handle photo request
app.post('/photo', function(req,res){
  console.log(req.body.photo_id);
  
  const photoReference = req.body.photo_id;

  const photoUrl = `https://maps.googleapis.com/maps/api/place/photo?maxwidth=1600&photo_reference=${photoReference}&key=${apiKey}`;
  console.log(photoUrl);

  https.get(photoUrl, (response) => {
  res.set('Content-Type', 'image/jpeg');
  // response.pipe(res);
}).on('error', (error) => {
  console.error('Error making API request:', error);
  res.status(500).send('Error fetching photo');
}).on('response', (response) => {
  console.log(response.statusCode, response.headers);
  res.json({ message: response.headers.location });
});
});




app.listen(3000, function(){
    console.log("Port 3000");
});