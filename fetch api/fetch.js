let URL = "https://catfact.ninja/fact";  

const catfact = async () => {
    console.log("Fetching the API...");

    try {
        let request = await fetch(URL);
        if (!request.ok) { 
            throw new Error(`HTTP error! Status: ${request.status}`); 
        }

        let data = await request.json();  // Parse the response to JSON format
        console.log("Data received:", data.fact);  // Display the received data
    } catch (error) {
        console.error("Error fetching the API:", error);
    }
}

catfact();
