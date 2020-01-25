//import { read } from "fs";

//client code represents all the code that the browser executes
//client code represents all the code that the user will see


//geonames API - function to send city name to API
const url = 'http://api.geonames.org/citiesJSON?'
const key = 'sheen';



/* Function to POST data */
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

appSendServerData('/', {cityName: "Toronto"})



//testing event listeners
var test = document.getElementById("button-trip");
test.onclick = function sayHi() {
    console.log('Hi Sheen Machine');
}
