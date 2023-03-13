const keywords = [
    "Malaysian food",
    "Cafes",
    "Restaurants",
    "Nasi Lemak",
    "Roti Canai",
    "Char Kway Teow",
    "Laksa",
    "Nasi Goreng",
    "Satay",
    "Ayam Goreng",
    "Mee Goreng",
    "Hainanese Chicken Rice",
    "Curry Mee",
    "Assam Laksa",
    "Murtabak",
    "Beef Rendang",
    "Nasi Briyani",
    "Tom Yam",
    "Nasi Kerabu",
    "Mee Rebus",
    "Kuey Teow Soup",
    "Soto",
    "Bak Kut Teh",
    "Fried Rice",
    "Fried Kuey Teow",
    "Maggi Goreng",
    "Kampung Fried Rice",
    "Claypot Chicken Rice",
    "Mee Siam",
    "Mee Bandung",
    "Mee Jawa",
    "Nasi Dagang",
    "Nasi Tomato",
    "Nasi Ayam",
    "Nasi Kandar",
    "Nasi Arab",
    "Mee Kari",
    "Loh Mee",
    "Hokkien Mee",
    "Pan Mee",
    "Yong Tau Foo",
    "Kolo Mee",
    "Sarawak Laksa",
    "Belacan Fried Rice",
    "Prawn Mee",
    "Seafood",
    "Burgers",
    "Pizza",
    "Korean Food",
    "Japanese Food",
    "Chinese Food",
    "Western Food",
    "Fast Food",
    "Thai Food",
    "Indian Food",
    "Middle Eastern Food",
    "Vegetarian Food",
    "Vegan Food",
    "Gluten-Free Food",
    "Halal Food",
    "Kebabs",
    "Grilled Meat",
    "BBQ",
    "Hotpot",
    "Dim Sum",
    "Sushi",
    "Ramen",
    "Udon",
    "Tempura",
    "Soba",
    "Donburi",
    "Okonomiyaki",
    "Sashimi",
    "Bento",
    "Eggs Benedict",
    "Croissants",
    "Bagels",
    "Sandwiches",
    "Salads",
    "Soups",
    "Pasta",
    "Steak",
    "Roast Chicken",
    "Fish and Chips",
    "Fried Chicken",
    "Tacos",
    "Biryani",
    "Curries",
    "Kofta",
    "Samosas",
    "Naan",
    "Chapati",
    "Biryani",
    "Tandoori Chicken",
    "Hummus",
    "Falafel",
    "Tabbouleh",
    "Kebabs",
    "Shawarma",
    "Pita Bread",
    "Baklava",
    "Kunafa",
    "Ikan bakar",
  "Nasi kandar",
  "Keropok lekor",
  "Mee bandung",
  "Mee rebus",
  "Mee kari",
  "Mee hailam",
  "Nasi dagang",
  "Laksa Penang",
  "Laksa Johor",
  "Laksa Sarawak",
  "Laksa Kelantan",
  "Lontong",
  "Mee siam",
  "Nasi lemak kukus",
  "Nasi lemak bungkus",
  "Nasi kerabu",
  "Ayam percik",
  "Nasi ulam",
  "Soto",
  "Sup kambing",
  "Nasi tomato",
  "Roti jala",
  "Ayam masak merah",
  "Asam pedas",
  "Kari ayam",
  "Kari kambing",
  "Kari ikan",
  "Kari kepala ikan",
  "Kari udang",
  "Ketam masak lemak cili api",
  "Kangkung belacan",
  "Petai masak udang",
  "Sambal sotong",
  "Sambal ikan bilis",
  "Sambal tumis",
  "Sambal petai",
  "Sambal goreng",
  "Sambal belacan",
  "Telur masin",
  "Belutak",
  "Ketupat palas",
  "Kuih lapis",
  "Putu mayam",
  "Apam balik",
  "Serunding",
  "Sata",
  "Pulut panggang",
  "Ayam golek",
  "Ayam panggang",
  "Ayam percik",
  "Biryani",
  "Botok-botok",
  "Daging masak hitam",
  "Daging masak kicap",
  "Daging masak merah",
  "Dendeng",
  "Gulai ayam",
  "Gulai daging",
  "Gulai ikan",
  "Gulai kepala ikan",
  "Gulai lemak",
  "Gulai telur itik",
  "Ikan asam pedas",
  "Ikan goreng berlada",
  "Ikan masin",
  "Ikan patin masak tempoyak",
  "Ikan tenggiri masak asam",
  "Ikan tenggiri masak lemak",
  "Ikan tongkol masak kicap",
  "Ikan tongkol masak merah",
  "Ikan tongkol masak pedas",
  "Ikan bilis goreng",
  "Ikan bilis masin",
  "Ikan kembung masak asam",
  "Ikan kembung masak lemak",
  "Ikan kembung masak pedas",
  "Ikan selar masak kicap",
  "Ikan selar masak merah",
  "Ikan singgang",
  "Jering goreng",
  "Kangkung goreng belacan",
  "Ketupat sotong",
  "Kuih cara berlauk",
  "Assam Laksa",
  "Char Kway Teow",
  "Hokkien Mee",
  "Nasi Kandar",
  "Penang Rojak",
  "Mee Goreng",
  "Prawn Mee",
  "Curry Mee",
  "Loh Bak",
  "Nasi Lemak",
  "Laksa Lemak",
  "Koay Teow Th'ng",
  "Oh Chien",
  "Chendol",
  "Apom Manis",
  "Pasembur",
  "Mee Rebus",
  "Chee Cheong Fun",
  "Mamak Mee Goreng",
  "Yong Tau Foo",
  "Mee Jawa",
  "Kway Teow Kia",
  "Acar Awak",
  "Lorbak",
  "Fried Oyster",
  "Bak Kut Teh",
  "Mee Sotong",
  "Mee Hoon Sotong",
  "Popiah",
  "Koay Chiap",
  "Hainanese Chicken Rice",
  "Laksa",
  "Sotong Bakar",
  "Maggi Goreng",
  "Mee Suah Kueh",
  "Lor Mee",
  "Nasi Tomato",
  "Oyster Omelette",
  "Char Hor Fun",
  "Koay Kak",
  "Lemuni Rice",
  "Mee Udang",
  "Penang Fried Rice",
  "Mee Kari",
  "Kerabu Bee Hoon",
  "Loh Mee",
  "Hokkien Char",
  "Beef Koay Teow",
  "Yi Pin",
  "Penang Curry Noodles",
  "Chee Cheong Chok",
  "Curry Chee Cheong Fun",
  "Wan Than Mee",
  "Mee Goreng Mamak",
  "Mee Kuah Ketam",
  "Kari Mee",
  "Poh Piah",
  "Laksa",
  "Loh Bak Gou",
  "Koay Teow Soup",
  "Kiam Chai Boey",
  "Chapati",
  "Nasi Biryani",
  "Nasi Tomato",
  "Bihun Sup",
  "Sar Hor Fun",
  "Lui Char",
  "Char Siew",
  "Mee Kari Udang",
  "Belacan Fried Rice",
  "Pig Innard Porridge",
  "Chu Char",
  "Kangkung Belacan",
  "Curry Mee",
  "Roti Canai",
  "Satay",
  "Beef Rendang",
  "Murtabak",
  "Keropok Lekor",
  "Gulai Tumis",
  "Ikan Bakar",
  "Sambal Petai",
  "Sambal Stingray",
  "Lamb Chops",
  "Tandoori Chicken",
  "Sizzling Noodles",
  "Koay Teow Kungfu",
  "Nasi Kandar Kampung",
  "Ayam Golek",
  "Ampang Yong Tau Foo",
  "Ayam Masak Merah",
  "Loh Mee",
  "Steamboat",
  "Nasi Lemak",
  "Char Kuey Teow",
  "Hokkien Mee",
  "Bak Kut Teh",
  "Yong Tau Foo",
  "Satay",
  "Curry Laksa",
  "Roti Canai",
  "Mee Goreng",
  "Kaya Toast",
  "Chee Cheong Fun",
  "Loh Mee",
  "Kolo Mee",
  "Wonton Mee",
  "Claypot Chicken Rice",
  "Fish Head Curry",
  "Nasi Kandar",
  "Bah Kut Teh",
  "Braised Pork Rice",
  "Asam Laksa",
  "Prawn Mee",
  "Pan Mee",
  "Roast Pork",
  "Prawn Noodles",
  "Siew Yuk",
  "Burgers",
  "Nasi Dagang",
  "Banana Leaf Rice",
  "Soto",
  "Rojak",
  "Laksa Sarawak",
  "Korean BBQ",
  "Dim Sum",
  "Porridge",
  "Bihun Sup",
  "Keropok Lekor",
  "Yakiniku",
  "Oyster Omelette",
  "Sambal Sotong",
  "Kampua Mee",
  "Lontong",
  "Murtabak",
  "Maggi Goreng",
  "Fried Chicken",
  "Banh Mi",
  "Bakso",
  "Hainanese Chicken Chop",
  "Pork Noodles",
  "Mala Hot Pot",
  "Mutton Soup",
  "Tom Yam Noodles",
  "Mamak Rojak",
  "Fish and Chips",
  "Cendol",
  "Mango Sticky Rice",
  "Fried Rice",
  "Chapati",
  "Nasi Ayam",
  "Beef Noodles",
  "Chicken Rice Ball",
  "Sarawak Kolo Mee",
  "Sarawak Laksa",
  "Ayam Penyet",
  "Curry Puffs",
  "Wagyu Beef",
  "Nasi Kukus",
  "Mee Rebus",
  "Salted Egg Yolk Chicken",
  "Pho",
  "Hakka Mee",
  "Ikan Bakar",
  "Hokkaido Cheese Tart",
  "Kacang Pool",
  "Tandoori Chicken",
  "Gyoza",
  "Thosai",
  "Garlic Butter Prawns",
  "Crispy Duck",
  "Prawn Meehoon",
  "Lor Bak",
  "Maggi Soup",
  "Nasi Goreng Kampung",
  "Biryani",
  "Mee Kolok",
  "Hokkien Char",
  "Tomyam Seafood",
  "Claypot Loh Shu Fan",
  "Curry Meehoon",
  "Sizzling Yee Mee",
  "Char Siew Pao",
  "Popiah",
  "Thai Basil Chicken",
  "Fish and Chips",
  "Prawn Noodles",
  "Beef Rendang",
  "Grilled Fish",
  "Shrimp Dumpling Noodles",
  "Pandan Chicken",
  "Butter Prawns",
  "Duck Noodles",
  "Soya Sauce Chicken",
  "Peking Duck",
  'Malaysian',
  'Korean',
  'African',
  'Western',
  'Healthy',
  'Vegetarian',
  'Asian',
  'Japanese',
  'Chinese',
  'Thai',
  'Indian',
  'Italian',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'French',
  'Spanish',
  'Greek',
  'Vietnamese',
  'Indonesian',
  'Fusion',
  'Organic',
  'Gluten-Free',
  'Seafood',
  'Barbecue',
  'Steakhouse',
  'Burger',
  'Pizza',
  'Sandwiches',
  'Salads',
  'Noodles',
  'Rice',
  'Curry',
  'Soup',
  'Stir Fry',
  'Fried Chicken',
  'Sushi',
  'Dim Sum',
  'Hot Pot',
  'Sichuan',
  'Shanghai',
  'Cantonese',
  'Beijing',
  'Hunan',
  'Tacos',
  'Burritos',
  'Pasta',
  'Gelato',
  'Cannoli',
  'Bakery',
  'Café',
  'Diner',
  'Bistro',
  'Brunch',
  'Vegetables',
  'Grilled',
  'Roasted',
  'Smoked',
  'Family Style',
  'Buffet',
  'Food Court',
  'Food Truck',
  'Fine Dining',
  'Casual Dining',
  'Fast Casual',
  'Quick Serve',
  'Takeout',
  'Delivery',
  'Catering',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Brunch'
  ];


const halalKeywords = [
    'Malaysian',
  'Korean',
  'African',
  'Western',
  'Healthy',
  'Vegetarian',
  'Asian',
  'Japanese',
  'Chinese',
  'Thai',
  'Indian',
  'Italian',
  'Mediterranean',
  'Mexican',
  'Middle Eastern',
  'French',
  'Spanish',
  'Greek',
  'Vietnamese',
  'Indonesian',
  'Fusion',
  'Organic',
  'Gluten-Free',
  'Seafood',
  'Barbecue',
  'Steakhouse',
  'Burger',
  'Pizza',
  'Sandwiches',
  'Salads',
  'Noodles',
  'Rice',
  'Curry',
  'Soup',
  'Stir Fry',
  'Fried Chicken',
  'Sushi',
  'Dim Sum',
  'Hot Pot',
  'Sichuan',
  'Shanghai',
  'Cantonese',
  'Beijing',
  'Hunan',
  'Tacos',
  'Burritos',
  'Tostadas',
  'Empanadas',
  'Paella',
  'Tapas',
  'Sangria',
  'Pasta',
  'Gelato',
  'Cannoli',
  'Bakery',
  'Café',
  'Diner',
  'Brunch',
  'Grilled',
  'Roasted',
  'Smoked',
  'Raw',
  'Baked',
  'Stuffed',
  'Fried',
  'Spicy',
  'Sour',
  'Sweet',
  'Savory',
  'Salty',
  'Tangy',
  'Umami',
  'Comfort Food',
  'Farm-to-Table',
  'Family Style',
  'Buffet',
  'Food Court',
  'Food Truck',
  'Pop-Up',
  'Fine Dining',
  'Casual Dining',
  'Fast Casual',
  'Quick Serve',
  'Takeout',
  'Delivery',
  'Catering',
  'Breakfast',
  'Lunch',
  'Dinner',
  'Brunch'
]

module.exports = {keywords, halalKeywords};