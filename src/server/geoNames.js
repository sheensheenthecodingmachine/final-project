const fetch = require('node-fetch');

const url = "http://api.geonames.org/searchJSON?name="
const key = "sheen"

const getCityCoordinates = async (cityName)=>{
    const response = await fetch(`${url}${encodeURIComponent(cityName)}&maxRows=2&style=LONG&Lang=es&username=${key}`)
    try {
        const newData = await response.json();
        const filteredData = {
            cityName: cityName, 
            lon: newData.geonames[0].lng, 
            lat: newData.geonames[0].lat,
            country: newData.geonames[0].countryName, 
          };
        return filteredData;
    } catch(error){
        console.log("error", error);
    }
}

module.exports = getCityCoordinates;