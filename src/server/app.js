const path = require("path");
const express = require("express");
var bodyParser = require("body-parser");
var cors = require("cors");
var fetchDaWeather = require("./darkSky.js");
var getCityCoordinates = require("./geoNames");
var fetchAPhoto = require("./pixaBay.js");


const doThatThing = async (req, res) => {
  const timestamp = new Date(req.body.date).getTime();
  const city = await getCityCoordinates(req.body.cityName);
  let [weather, picture] = await Promise.all([
    fetchDaWeather(city.lat, city.lon, timestamp), 
    fetchAPhoto(city.cityName, city.country)
  ]);
  const responseObject = {
    city,
    weather,
    picture
  }
  res.send(responseObject);
}

const createApp = () =>
  express()
    .use(cors())
    .use(bodyParser.json())
    .use(express.static("dist"))
    .post("/", doThatThing)
    //.get("/", (_req, res) => res.sendFile(path.resolve("./src/client/views/index.html")))

module.exports.default = createApp;
/*
getCityCoordinates (url, cityName, key)
    .then(function(firstApiData){
         console.log(JSON.stringify(firstApiData));
         console.log(firstApiData , "recieved from API")
         getCityCoordinates('/', {cityName: cityName, long: firstApiData.geonames[0].lng, lat: firstApiData.geonames[0].lat, country: firstApiData.geonames[0].countryName, date: date}
     )
     })
*/