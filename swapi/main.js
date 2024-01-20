console.log("connected")

const resBtn = document.querySelector("#residentsBtn")

const getResidents = (event) =>{ 
    event.preventDefault(); 
    console.log("button clicked")
    axios.get("https://swapi.dev/api/planets/",{
        params:{
            search:"Alderaan"
        }
    })
        .then(response=>{
            console.log(response)
            const residents = response.data.results[0].residents
            console.log(residents)
            for(const resident of residents){
                axios.get(resident)
                    .then(response =>{
                        console.log(response)
                        const h2 = document.createElement("h2")
                        h2.textContent= response.data.name;
                        document.body.appendChild(h2)
                    })
            }
        })
    }

resBtn.addEventListener("click", getResidents)