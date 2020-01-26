//client code represents all the code that the browser executes
//client code represents all the code that the user will see



//geonames API - function to send city name to API
const url = 'http://api.geonames.org/citiesJSON?'
const key = 'sheen'
const cityName = document.getElementById("trip-input").value;

//event listen + retrival of browser input
document.getElementById("button-trip").addEventListener('click', getCityName);
function getCityName(x){
    const cityName = document.getElementById("trip-input").value;
    //getCityCoordinates (url, cityName, key);
    console.log(cityName);

}

//send the value of trip-input to the GeoName Api in a Get Request
// TODO-Async GET
const getCityCoordinates = async (url, cityName, key)=>{
    const repsonse = await fetch(`${url}cityName=${cityName}&username=${key}`)
    try{
        const returnedData = await response.json();
        console.log(returnedData)
    } catch(error){
        console.log("error", error);
    }
}
/* Function to POST data along to save to our APP */
const appSendServerData = async (url = '/', firstApiData = {})=>{
    console.log(firstApiData)
    const response = await fetch(url,{
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',

        },
        body: JSON.stringify(firstApiData),
    });
try {
    const newData = await response.json();
    console.log(newData);
    return newData
} catch(error) {
    console.log("error", error);
    //handle the error
}
}

appSendServerData('/', {cityName: cityName, long: "firstApiData.longdituge", lat: "firstApiData.lat", country: "firstApiData.country"})


// here you can update the ui so that trip-input.value displays in the app


//testing event listeners
var test = document.getElementById("button-trip");
test.onclick = function sayHi() {
    console.log('Hi Sheen Machine');
}
