const BASE_URL = 'https://wttr.in'

//global variables
const form = document.querySelector("form")
const userSearch = document.querySelector(".userSearch")
const sunrise = document.querySelector("#sunrise")
const sunset = document.querySelector("#sunset")
const moonInfo = document.querySelector("#moon-info")
const main = document.querySelector("main")

// api organization
form.addEventListener("submit", getApiData)


function getApiData(event){
    event.preventDefault()
    const location =`${userSearch.value}`
    const urlFormat = `${BASE_URL}/${location}?format=j1`
    getAstroInfo(urlFormat,location)
    form.reset()
    } 

    function getAstroInfo(url,location){
    fetch(url)
    .then((response) => response.json())
    .then((result) => {

            getSunrise(result);
            getSunset(result);
            getMoonPhase(result);
        }
    )
    .catch((error) => {
        console.log("Error, location not found.");
;

        errorMessage(error)

        
    })
    }
function errorMessage(error){
    console.log("Location not found")
 };


// functions


function getSunrise(result){
    const sunriseP = document.createElement("p")
    sunriseP.innerHTML = `<p> <strong> Sunrise Time : </strong> ${result.weather[0].astronomy[0].sunrise} </p>`
    sunrise.append(sunriseP)
}


function getSunset(result){
    const sunsetP = document.createElement("p")
    sunsetP.innerHTML = `<p> <strong> Sunset Time : </strong> ${result.weather[0].astronomy[0].sunset} </p>`
    sunset.append(sunsetP)
}


function getMoonPhase(result){
    const moonP = document.createElement("p")
    moonP.innerHTML = `<p> <strong> Moon Phase : </strong> ${result.weather[0].astronomy[0].moon_phase} </p>`
    moonInfo.append(moonP)
}




