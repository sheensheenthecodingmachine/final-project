import './styles/style.scss'


//This function posts the data 
document.getElementById('vamos-button').addEventListener('click', () => {
     const cityName = document.getElementById('trip-input').value;
     const date = document.getElementById('date-input').value;
     console.log(date);
     postData ("http://localhost:8081/", {cityName, date}).then(({city, weather, picture}) => {
          updateUI(city, weather, picture)
          console.log(weather, city, picture);
     }, (error) => {
          console.warn(error);
     })
 });

 //this function updates my UI
 function updateUI({cityName, country}, {high, low, summary, icon}, picture){
     document.getElementById('destination-output').textContent = `${cityName}, ${country}`;
     document.getElementById('departure-date-output').textContent = document.getElementById('date-input').value;
     document.getElementById('high').textContent = `High: ${high}`;
     document.getElementById('low').textContent = `Low: ${low}`;
     document.getElementById('description').textContent = `${summary}`;
     document.getElementById('image').innerHTML = `<img src="${picture}">`;
     document.getElementById('weather-icon').innerHTML = `<img src="http://localhost:8081/img/${icon}.svg">`;
 }

 //post data route
 const postData = async ( url, data)=>{
     const res = await fetch(url, {
     method: 'POST',
     credentials: 'same-origin',
     headers: { 'Content-Type': 'application/json' },
     body: JSON.stringify(data), 
   });
   try {
         const newData = await res.json();
         return newData;
     } catch(error) {
         console.log("post request error", error);
     }
 }


