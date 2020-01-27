
    const updateUI = async () => {
    
        const request = await fetch('/data')
        console.log(request)
        try {
            const allData = await request.json()
            console.log(allData)
        } catch(error){     
        console.log("error", error)
    }
}