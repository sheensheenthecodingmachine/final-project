import { getCityCoordinates } from './geoNames';

export async function handleSubmit(event) {
    event.preventDefault()

    const cityName = document.querySelector('#trip-input').value;

    const geoNamesResponse = await getCityCoordinates(cityName);
    const photo = await getAPhoto(); // TODO Import the corresponding functions and pass the value to it it needs

    const data = {
        cityName: cityName, 
        long: geoNamesResponse.geonames[0].lng, 
        at: geoNamesResponse.geonames[0].lat, 
        country: geoNamesResponse.geonames[0].countryName, 
        date: date,
        photo: photo
    }

    post.data
    // check what text was put into the form field
    let formText = document.getElementById('name').value
    checkForName(formText)

    console.log("::: Form Submitted :::")
    fetch('http://localhost:8000/')
    .then(res => res.json())
    .then(function(res) {
        document.getElementById('results').innerHTML = res.message
    })
}