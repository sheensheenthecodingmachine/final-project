//client code represents all the code that the browser executes
//client code represents all the code that the user will see

//geonames API - function to send city name to API
const url = "http://api.geonames.org/searchJSON?name="
const key = "sheen"
//const cityName = document.getElementById("trip-input").value

//event listen + retrival of browser input
document.getElementById("vamos-button").addEventListener('click', displayInputs);
function displayInputs(x){
    const cityName = document.getElementById("trip-input").value;
    const date = document.getElementById("date-input").value;
    document.getElementById('destination-output').textContent = cityName;
    document.getElementById('departure-date-output').textContent = date;
//send the value of trip-input to the GeoName Api
// Async GET/fetch to api
const getCityCoordinates = async (url, cityName, key)=>{
    const response = await fetch(`${url}${cityName}&maxRows=2&style=LONG&Lang=es&username=${key}`)
    try {
        const returnedData = await response.json();
        console.log(returnedData)
        return returnedData;
    } catch(error){
        console.log("error", error);
    }
}
/* Function to POST data along to save to our APP */
// turn this into a then() function

getCityCoordinates (url, cityName, key)
    .then(function(firstApiData){
        console.log(JSON.stringify(firstApiData));
        console.log(firstApiData , "recieved from API")
        appSendServerData('/', {cityName: cityName, long: firstApiData.geonames[0].lng, lat: firstApiData.geonames[0].lat, country: firstApiData.geonames[0].countryName}
    )
    })
    .then(updateUI

    )
}

    const updateUI = async () => {
    
        const request = await fetch('/data')
        console.log(request)
        try {
            const allData = await request.json()
            console.log(allData)
        } catch(error){     
        console.log("error", error)
    }
}
/* Function to POST data */
const appSendServerData = async ( url = '/', firstApiData = {})=>{
      const response = await fetch(url, {
      method: 'POST', //GET POST PUT DELETE
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(firstApiData), 
    });

    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;

      } catch(error) {
      console.log("error", error);
}
}
