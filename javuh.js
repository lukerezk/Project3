
//const axios = require('axios')

var apiUrl = "http://statenweb.mockable.io/conversions/";
var inches = document.getElementById("inches");
var centimeters = document.getElementById("centimeters");
var cmout = document.getElementById("result1");
var inout = document.getElementById("result2");

document.getElementById("1").addEventListener("click", function(event){
  event.preventDefault();
  axios.get(apiUrl)
    .then(function (response){
        console.log(response.data.centimetersInInch);
        console.log(inches);
        var cmInches = parseFloat(response.data.centimetersInInch);
        var inch = parseFloat(inches.value);
        var result1 = cmInches * inch;
        cmout.value = result1;
    });
});

document.getElementById("2").addEventListener("click", function(event){
    event.preventDefault();
    axios.get(apiUrl)
    .then(function (response){
        console.log(response.data.inchesInCm);
        console.log(centimeters);
        var inchesCm = parseFloat(response.data.inchesInCm);
        var cm = parseFloat(centimeters.value);
        var result2 = cm * inchesCm;
        inout.value = result2;
    });
});