// a server receives a request, processes those requests and then returns a response
// it is one the server that you create the routes
// servers can be setup to save data produced while someone is within the app
//express to run server and routes
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

//JS object for data endpoint for first API route
const firstApiData = {};

//A GET route (requests data) uses root url requesting 
//to send the data from the js-object "firstApiData"

app.get('/', function getSomething (res, res){
    response.send(firstApiData);
});

//a POST route using root url and app instance,
// Post requests send and store data
//i think they receieve data and store it and also send a specific response?

app.post('/', function storeSomething(req, res){
    FirstApiData.push(req.body)
    console.log(firstApiData)
    console.log("console should have logged identical things")
})
