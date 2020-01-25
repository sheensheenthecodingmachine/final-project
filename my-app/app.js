//client code represents all the code that the browser executes
//client code represents all the code that the user will see

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

