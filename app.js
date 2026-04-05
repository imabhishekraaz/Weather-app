// Fetch Buttons in HTML
const inputBox = document.getElementById("input-box");
const Searchbtn = document.getElementById("Searchbtn");
const CurrentLocationBtn = document.getElementById("CurrentLocationBtn");
const container = document.getElementById("container");

// Update the Location using EventListener
// Add EventListener to SearchBtn for get the data from the inputBox
Searchbtn.addEventListener("click",()=>{
    // get the InputBox value
    const userLocation = inputBox.value;

    // check user enter the location or not?
    if(!userLocation){
        alert("Please! Enter the Location");
    }else{
        callApi(userLocation);
    }
    
})

//get the Location details by calling the API
async function callApi(cityName){
    // Fetch the data form the API
    const apikey = `https://api.weatherapi.com/v1/current.json?key=d565ab22e5bc41b4b8811410251508&q=${cityName}&aqi=no`;
    const response = await fetch(apikey);
    const data = await response.json();
    locationDetails(data);

}
// Get the Location,temprature,country name,city name etc.
function locationDetails(data){
    
    const resCityName = data.location.name;
    const resCountryName = data.location.country;
    const resRegionName = data.location.region;
    const resTimeZone = data.location.tz_id;
    const resTemp = data.current.temp_c;
    const resWeatherIcon = data.current.condition.icon;
    const resWeatherText = data.current.condition.text;
    
    //call the function to insert the HTML in web page
    updateDetails(resCityName,resCountryName,resRegionName,resTemp,resWeatherIcon,resWeatherText);
}
// add the details in webpage
function updateDetails(cityName,countryName,regionName,temp,icon,WeatherText){
    container.innerText= "Fetching Data...⌛";
    setTimeout(()=>{
       container.innerHTML = `
        <div id="location-details" class="w-full h-50 rounded shadow-[0px_0px_10px_black] bg-amber-500 p-2">
            <h1 class="text-3xl font-[600]">${cityName}</h1>
            <h1>${countryName}, ${regionName}</h1>
            <h1 class="text-3xl font-[600]">${temp}°C</h1>
            <div class="flex justify-center items-center">
                <img src="${icon}" alt="weather image">
            </div>
            <h1>${WeatherText}</h1>
        </div>
    `
    inputBox.value = "";
    },1000)
    
}



navigator.geolocation.getCurrentPosition((position) => {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    console.log(lat);
    console.log(lon);
    
//   fetchWeatherByCoords(lat, lon);
});

















// Call the API to get the data of any place 
// async function callApi(cityName){
    
//     const response = await fetch(`http://api.weatherapi.com/v1/current.json?key=d565ab22e5bc41b4b8811410251508&q=${cityName}&aqi=no`);
//     const data =await response.json();
//     return data;
// }
// console.log(callApi("Aligarh"));

// callApi("Aligarh").then((res)=>{
//     log(res.Cityname)
// }).then((res)=>{
//       console.log(res);
//     })
