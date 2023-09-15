const url='https://api.spotify.com/v1/artists?ids=4YRxDV8wJFPHPTeXepOstw'
const token = 'BQAKkaNbnu8vNu5Ll83NNawK0Oy5GXs46yamy2GOMrTBQ8SW759ETjlS9pELmP1INWn01r76OslM4JJtE__KyEeoe6j3_gs2J7MIO08n7567u1uUs3_O96sLwNt9AQl29-QZ9bFl_iYqvq1oBnxQZRFzNS2UV_LPtKxi5GhMjY74acZ1mJ0PO_BDXANKxJr4IuSeE59yHX7xNqOXyXKobKce-0GcDskoxYEc6USV42RBbFPnmai6fKOAgCTGoHhKjLZvCpNEVuhV8ZHyx9EccZvj';
const request = new Request(
    url,{
        headers:{
            'Authorization': `Bearer ${token}`
        },
    })


    async function getData() {
        try {
            const response = await fetch(request);
            const data = await response.json();
            console.log(data);
            
           
            const dataContainer = document.getElementById("assignment");

            data.artists.forEach(artist => {
                const artistlist= document.createElement("h1");
                artistlist.textContent = `Artist Name: ${artist.name}`;
                dataContainer.appendChild(artistlist);
            });

            
            dataContainer.appendChild(artistList);
        } catch (error) {
            console.error("Error fetching data:", error);
        }
    }


getData()