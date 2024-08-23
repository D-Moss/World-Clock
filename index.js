function updateTime() {

//Philadelphia
let philadelphiaElement = document.querySelector("#phila");
let philadelphiaDateElement = philadelphiaElement.querySelector(".date");
let philadelphiaTimeElement = philadelphiaElement.querySelector(".time");
let philadelphiaTime = moment().tz("America/New_York");

philadelphiaDateElement.innerHTML = philadelphiaTime.format("dddd, MMMM D, YYYY");
philadelphiaTimeElement.innerHTML = philadelphiaTime.format("h:mm:ss [<small>]A[</small>]");

//Hawaii
let hawaiiElement = document.querySelector("#hawaii");
let hawaiiDateElement = hawaiiElement.querySelector(".date");
let hawaiiTimeElement = hawaiiElement.querySelector(".time");
let hawaiiTime = moment().tz("US/Hawaii");

hawaiiDateElement.innerHTML = hawaiiTime.format("dddd, MMMM D, YYYY");
hawaiiTimeElement.innerHTML = hawaiiTime.format("h:mm:ss [<small>]A[</small>]");
}

updateTime();
setInterval(updateTime, 1000);