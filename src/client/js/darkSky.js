// this funtion will send lat, lgn and date to dark sky to receive the weather forecast
https://api.darksky.net/forecast/[key]/[latitude],[longitude],[time]
[YYYY]-[MM]-[DD]T[HH]:[MM]:[SS][timezone]

const darkSkyUrl = 'https://api.darksky.net/forecast/'
const darkSkyKey = 'a4209de760871fb7ee12e90705ae07e5'
//const date = document.getElementById("date-input").value

let time = ((document.getElementById('date-input').value) + ["12:12:12"][]
    try {
        time = time.getTime();
        time = time / 1000


const fetchDaWeather = async (darkSkyUrl, lat, long, time) => {
        app.get('/data', function getSomething (res, req){
        req.send(date, lat, long);
        }); 
        const response = await fetch(`${darkSkyUrl}${darkSkyKey}/${lat},${long},${time}`)
        try {
            const weatherData = await response.json();
            console.log(weatherData)
            return weatherData;
        } catch(error){
            console.log("error", error);
        }
    }
    /* Function to POST data along to save to our data endpoint */
    fetchDaWeather (url, high, low, description)
        .then(function(secondApiData){
            console.log(JSON.stringify(secondApiData));
            console.log(secondApiData , "recieved from dark sky API")
            appSendServerDataAgain('/', {high: {}, low: {}, summary: {}}
        )
        })

    export {
        fetchDaWeather
    }