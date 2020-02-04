const fetch = require('node-fetch');

const darkSkyUrl = 'https://api.darksky.net/forecast/';
const darkSkyKey = '8918b1ff9b6bb1785f2e10bf7b7005fe';

const fetchDaWeather = async (lat, long, timestamp) => {
    try {
        const convertedTime = ~~(timestamp/1000);
        const response = await fetch(`${darkSkyUrl}${darkSkyKey}/${lat},${long},${convertedTime}`);
        const weatherData = await response.json();
        const dailyWeather = weatherData.daily.data[0];
        const filteredData = {
            high: dailyWeather.temperatureHigh,
            low:  dailyWeather.apparentTemperatureLow,
            summary: dailyWeather.summary,
            icon: dailyWeather.icon,
          };
        return filteredData;
    } catch(error){
        console.log("error", error);
    }
}

module.exports = fetchDaWeather;