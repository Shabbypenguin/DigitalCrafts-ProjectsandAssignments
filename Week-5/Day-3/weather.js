const weatherOutput = document.getElementById("weatherSpot")
const apiKey = "OGIyMzI4YzVlMmZjMWM5OGYxNjk0M2I0OWM2M2RkZmE="

function getUserLocation(locationOutput){
	fetch('https://ipapi.co/json')
	.then(response => {
		return response.json()
	}).then(result =>{
		locationOutput(result)
	})
}

function getWeatherInformation(locationData, printdata) {
	fetch(`http://api.openweathermap.org/data/2.5/weather?zip=${locationData.postal}&appid=${atob(apiKey)}&units=imperial`)
	.then(response => {
		return response.json()
	}).then(weather => {
		checkForRain(weather.main, locationData)
	})
}

function checkForRain(weather, locationData){
	if (weather.pressure < 1006){
		printData(weather, locationData, "rainy")
	}else{
		printData(weather, locationData, "sunny")
	}
}
function printData(weather, locationData, outlook) {
	
	let currentWeather =`Hello in ${locationData.city}, looks like your weather will peak at a high of ${weather.temp_max} and cool off to ${weather.temp_min}. the pressure is reading at ${weather.pressure} so by my best guess, you should be in for some ${outlook} weather`
	weatherOutput.innerHTML = currentWeather
}

getUserLocation((locationData)=> {
	getWeatherInformation(locationData)
})