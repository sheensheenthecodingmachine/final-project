const fetch = require('node-fetch');

pixaBayUrl = "https://pixabay.com/api/?key="
pixaBayKey = "15057204-678d20485b105fae0c18f5986"

const getPhotoUrl = async (destination, country) => {
    const searchString = encodeURIComponent(destination+" "+country).replace(/%20/g, "+");
    const response = await fetch(`${pixaBayUrl}${pixaBayKey}&q=${searchString}&image_type=photo`)
    console.log(searchString);
    try {
        const photoJson = await response.json();
        return photoJson.hits[Math.floor(Math.random() * photoJson.hits.length)].webformatURL;
    } catch(error){
        console.log("error", error);
    }
}

module.exports =  getPhotoUrl;