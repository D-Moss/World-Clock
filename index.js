function updateTime() {
	//Denver
	let denverElement = document.querySelector("#denver");
	if (denverElement) {
		let denverDateElement = denverElement.querySelector(".date");
		let denverTimeElement = denverElement.querySelector(".time");
		let denverTime = moment().tz("America/Denver");

		denverDateElement.innerHTML = denverTime.format("dddd, MMMM D, YYYY");
		denverTimeElement.innerHTML = denverTime.format("h:mm:ss [<small>]A[</small>]");
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
	if (cityTimeZone === "current") {
		cityTimeZone = moment.tz.guess();
	}
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