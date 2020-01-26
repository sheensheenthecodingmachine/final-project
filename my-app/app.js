//client code represents all the code that the browser executes
//client code represents all the code that the user will see

//geonames API - function to send city name to API
const url = "http://api.geonames.org/searchJSON?name="
const key = "sheen"

//event listeners

const globalCityName = document.getElementById("button-trip").addEventListener('click', function getCityName() {
const cityName = document.getElementById("trip-input").value;
document.getElementById('destination-output').innerHTML= cityName;
})
//send the value of trip-input to the GeoName Api
// Async GET/fetch to GERONAMES api
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
/* Function to convert data from JSON and send as an object along the POST route to the storage endpoint in the server */
getCityCoordinates (url, cityName, key)
    .then(function(firstApiData){
        console.log(JSON.stringify(firstApiData));
        console.log(firstApiData , "recieved from API")
        appSendServerData('/', {cityName: cityName, long: firstApiData.geonames[0].lng, lat: firstApiData.geonames[0].lat, country: firstApiData.geonames[0].countryName}
    )
    })

    //then update the ui to display the destination
    .then(updateUI
  )
    updateUI = async() => {
    const request = await fetch('/data')
        console.log(request);
        try {
            const allData = await request.json()
        console.log(allData)
        const cityName = document.getElementById("trip-input").value;
        
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
      console.log("error", error)
}
}

//event listeners

dateClickEventListener();
function dateClickEventListener() {
  document.getElementById("button-date").addEventListener('click', functionToGetDate);
}

  function functionToGetDate(x){
  const getDate = document.getElementById("date-input").value;
  document.getElementById("departure-date-output").textContent = getDate;
  console.log(getDate)
 
}
//testing event listeners
var test = document.getElementById("button-trip");
test.onclick = function sayHi() {
    console.log('Hi Sheen Machine');
}
