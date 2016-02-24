var https = require('https');

// gonna come from the google maps API
var latitude, longitude;

// Fahrenheit to Celsius

function f2c(fahrenheit){
  return Math.round(5/9 * (fahrenheit - 32));
}

function getTemperature(cityNameArray, googleMapsAPIKey, forecastAPIKey){
  var cityNamePlus = cityNameArray.join("+");
  var cityName = cityNameArray.join(" ");


var request = https.get("https://maps.googleapis.com/maps/api/geocode/json?address=" + cityNamePlus + "&key=" + googleMapsAPIKey, function(response){
  var body = "";
  response.on("data", function(chunk){
    body +=chunk;
  }).on("end", function(){
    var jsonObject = JSON.parse(body);
    latitude = jsonObject.results[0].geometry.location.lat;
    longitude = jsonObject.results[0].geometry.location.lng;
    https.get("https://api.forecast.io/forecast/" + forecastAPIKey + "/" + latitude + "," + longitude, function(response){
      var body = "";
      //console.log(response.statusCode);
      //console.log(response);
      response.on("data", function(chunk){
        body+=chunk;
      }).on("end", function(){
        var jsonObject = JSON.parse(body);
      console.log("Temperature in "+ cityName + " is: " + jsonObject.currently.temperature +
    "F, " , f2c(jsonObject.currently.temperature)+ "C");

    });
    });

  });
});
}
module.exports.getTemperature = getTemperature;
