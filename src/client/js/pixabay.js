https://pixabay.com/api/?key={ KEY }&q=city+country&image_type=photo

pixaBayUrl = "https://pixabay.com/api/?key="
pixaBayKey = "15057204-678d20485b105fae0c18f5986"

const fetchAPhoto = async (pixaBayUrl, destination, country) => {
    app.get('/data', function getSomething (res, req){
    req.send(pixaBayUrl, destination, country);
    }); 

    const response = await fetch(`${pixaBayUrl}${pizaBayKey}&q=${destination}+${country}&image_type=photo`)
    try {
        const getAPhoto = await response.json();
        console.log(getAPhoto)
        return getAPhoto;
    } catch(error){
        console.log("error", error);
    }
}
/* Function to POST data along to save to our data endpoint */
fetchDaWeather (url, photo)
    .then(function(thirdApiData){
        console.log(JSON.stringify(thirdApiData));
        console.log(thirdApiData , "recieved from dark sky API")
        appSendServerDataAgain('/', {photo: {}}
    )
    })

export {
    fetchAPhoto
}