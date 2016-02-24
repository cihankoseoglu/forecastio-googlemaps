var forecast = require("./forecastgooglemaps");

/*
To get your forecast.io API key, go to
http://developer.forecast.io
and sign up. You get 1000 free requests per day, which should be more than enough.
*/
var forecastAPIKey = "YOUR_FORECAST_IO_API_KEY";

/*
To get your Google Maps API key, go to
https://developers.google.com/maps/documentation/geocoding/get-api-key
and sign up. You get 2500 free requests per day.
*/
var googleMapsAPIKey = "YOUR_GOOGLE_MAPS_API_KEY";

// Gets the city name from the command line "node index.js CITY NAME"
var city = process.argv.slice(2);

/*
Usage
On the command line
"node index.js CITY NAME"
Example
"node index.js Los Angeles"
*/
forecast.getTemperature(city, googleMapsAPIKey, forecastAPIKey);
