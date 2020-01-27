
/* Function to POST data */
const appSendServerData = async ( url = '/', allData = {})=>{
      const response = await fetch(url, {
      method: 'POST', //GET POST PUT DELETE
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
     // Body data type must match "Content-Type" header        
      body: JSON.stringify(allData), 
    });

    try {
        const newData = await response.json();
        //console.log(newData);
        return newData;

      } catch(error) {
      console.log("post request error", error);
}
}

export {
  appSendServerData
}
