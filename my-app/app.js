//client code represents all the code that the browser executes
//client code represents all the code that the user will see
//geonames API credentials
let baseURL = 'http://api.animalinfo.org/data/?animal='
let apiKey = '&appid=9f15e45060...';

//document.getElementById('#button-trip').addEventListener('click', performAction);

var test = document.getElementById("button-trip");
test.onclick = function sayHi() {
    console.log('Hi Sheen Machine');
}

//first Post Request
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

appSendServerData('/', {weather: "subjective"})

