/*
1 meter = 3.281 feet
1 liter = 0.264 gallon
1 kilogram = 2.204 pound
*/

const input = document.getElementById("input")
const btn = document.getElementById("convert-btn")
const meterToFeet = document.getElementById("meters-to-feet")
const feetToMeters = document.getElementById("feet-to-meters")
const litersToGallons = document.getElementById("liters-to-gallons")
const gallonsToLiters = document.getElementById("gallons-to-liters")
const kilosToPounds = document.getElementById("kilos-to-pounds")
const poundsToKilos = document.getElementById("pounds-to-kilos")


btn.addEventListener("click", function() {
    let feet = input.value * 3.281 
    meterToFeet.textContent = `${input.value} meters = ${(feet.toFixed(2))} feet`
    let meters = input.value / 3.281
    feetToMeters.textContent = `${input.value} feet = ${(meters.toFixed(3))} meters`
    let liters = input.value * 0.264
    litersToGallons.textContent = `${input.value} liters = ${(liters.toFixed(3))} gallons`
    let gallons = input.value / 0.264
    gallonsToLiters.textContent = `${input.value} gallons = ${(gallons.toFixed(2))} liters`
    let kilos = input.value * 2.204
    kilosToPounds.textContent = `${input.value} kilos = ${(kilos.toFixed(3))} pounds`
    let pounds = input.value / 2.204
    poundsToKilos.textContent = `${input.value} pounds = ${(pounds.toFixed(3))} kilos`
})
