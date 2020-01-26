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
app.get('/data', function getSomething (res, res){
console.log(firstApiData)
res.send(firstApiData);
}); 

//JS object for data endpoint for first API route
const firstApiData = [];

//a POST route - store data recieved to app endpoint
//add the send data to our app
app.post('/', storeSomething);
async function storeSomething(req, res){
  const futureWeather = await darkSkyApi(lat, lng)
  storage = { 
    
    cityName: req.body.cityName, 
    long: req.body.long, 
    lat: req.body.lat, 
    country: req.body.country
  }

    firstApiData.push(storage)
    console.log(firstApiData)
}

// build dark sky api async function

async function darkSkyApi(lat, lng){

  return futureWeather 
}
