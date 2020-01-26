// a server receives a request, processes those requests and then returns a response via ROUTES

const express = require('express');
// use express to start up an instance of your app
const app = express();

//cors for crsoss origin allowance
const cors = require('cors');
app.use(cors());

//dependencies
const bodyParser = require('body-parser');
//middleware - configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Initializing the main project folder */
app.use(express.static('my-app'));
const port = 8000;

//creating a local server to allow the app to run locally
const server = app.listen(port, listening);
function listening() {
    console.log("your server is running bish");
    console.log(`running on localhost: ${port}`);
}

//A GET route (requests data)
app.get('/data', function getFirstApiData (res, req){
console.log(firstApiData)
res.send(firstApiData);
}); 



//JS object for data endpoint for first API route
const firstApiData = [];

//a POST route - store data recieved to app endpoint
//add the send data to our app
app.post('/', storeSomething);
function storeSomething(req, res){
  storage = { 
    
    cityName: req.body.cityName, 
    long: req.body.long, 
    lat: req.body.lat, 
    country: req.body.country,
    high: "",
    low: "",
    description: "",
    date: ""
  }

    firstApiData.push(storage)
    console.log(firstApiData)

//Dark Sky API INfo
const darkSkyKey = "a0b392ae344130eba769f60cdac088b1"
const darkSkyURL = "https://api.darksky.net/forecast/"

// build dark sky api async function
const getFutureWeatherFromApi = async (darkSkyURL, long, lat, darkSkyKey, getDate)=>{
  const response = await fetch(`${darkSkyURL}${darkSkyKey}/${lat},${long},${getDate}`)
  try {
      const WeatherData = await response.json();
      console.log(WeatherData)
      return WeatherData;
  } catch(error){
   
    console.log("error", error);
  }
  }

/* Function to convert data from JSON and send as an object along the POST route to the storage endpoint in the server */
getFutureWeatherFromApi (darkSkyURL, long, lat, darkSkyKey, getDate)
  .then(function(secondApiData){
      console.log(JSON.stringify(secondApiData));
      console.log(secondApiData , "recieved from SKY whatever API")
      postToStorage('/', {date: getDate}
  )
  })
}