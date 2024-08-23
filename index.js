function updateTime() {
	//Philadelphia
	let philadelphiaElement = document.querySelector("#phila");
	if (philadelphiaElement) {
		let philadelphiaDateElement = philadelphiaElement.querySelector(".date");
		let philadelphiaTimeElement = philadelphiaElement.querySelector(".time");
		let philadelphiaTime = moment().tz("America/New_York");

		philadelphiaDateElement.innerHTML = philadelphiaTime.format("dddd, MMMM D, YYYY");
		philadelphiaTimeElement.innerHTML = philadelphiaTime.format("h:mm:ss [<small>]A[</small>]");
	}

	//Hawaii
	let hawaiiElement = document.querySelector("#hawaii");
	if (hawaiiElement) {
		let hawaiiDateElement = hawaiiElement.querySelector(".date");
		let hawaiiTimeElement = hawaiiElement.querySelector(".time");
		let hawaiiTime = moment().tz("Europe/Paris");

		hawaiiDateElement.innerHTML = hawaiiTime.format("dddd, MMMM D, YYYY");
		hawaiiTimeElement.innerHTML = hawaiiTime.format("h:mm:ss [<small>]A[</small>]");
	}
}

function updateCity(event) {
	let cityTimeZone = event.target.value;
	let cityName = cityTimeZone.replace("_", " ").split("/")[1];
	let cityTime = moment().tz(cityTimeZone);
	let citiesElement = document.querySelector("#cities");
	citiesElement.innerHTML = `
	<div class="city">
		<div>
			<h2>${cityName}</h2>
			<div class="date">${cityTime.format("dddd, MMMM D, YYYY")}</div>
		</div>
		<div class="time">
			${cityTime.format("h:mm:ss")} 
			<small>${cityTime.format("A")}</small>
		</div>
	</div>
	`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);