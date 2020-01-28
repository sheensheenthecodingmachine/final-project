  
// a server receives a request, processes those requests and then returns a response via ROUTES

const express = require('express');
// use express to start up an instance of your app
const app = express();

//cors for crsoss origin allowance
const cors = require('cors');
app.use(cors());

const path = require('path');


//dependencies
const bodyParser = require('body-parser');
//middleware - configure express to use body-parser as middle-ware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

/* Initializing the main project folder */
app.use(express.static('dist'));

const port = 8000;

//creating a local server to allow the app to run locally
const server = app.listen(port, listening);
function listening() {
    console.log("your server is running bish");
    console.log(`running on localhost: ${port}`);
}

app.get('/', function (req, res) {
  res.sendFile("dist/index.html")

//JS object for data endpoint for first API route
const allData = [];

//A GET route (requests data)
/* app.get('/data', function getSomething (res, req){
console.log(allData)
res.send(allData);
});  */

//A GET route (sends data from the storage center?)
app.get('/data', function sendSomething (res, req){
  res.send(allData);
  }); 

//a POST route - store data recieved to app endpoint
//add the send data to our app
app.post('/', storeSomething);
function storeSomething(req, res){
  storage = { 
    
    cityName: req.body.cityName, 
    long: req.body.long, 
    lat: req.body.lat, 
    country: req.body.country,
    date: req.body.date,
    timezone: "", 
    high: "",
    low:  "",
    summar: "",
    }

    allData.push(storage)
    console.log(allData)
}