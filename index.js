function updateTime() {
	//NewYork
	let newYorkElement = document.querySelector("#new-york");
	if (newYorkElement) {
		let newYorkDateElement = newYorkElement.querySelector(".date");
		let newYorkTimeElement = newYorkElement.querySelector(".time");
		let newYorkTime = moment().tz("America/New_York");

		newYorkDateElement.innerHTML = newYorkTime.format("dddd, MMMM D, YYYY");
		newYorkTimeElement.innerHTML = newYorkTime.format("h:mm:ss [<small>]A[</small>]");
	}

	//Phoenix
	let phoenixElement = document.querySelector("#phoenix");
	if (phoenixElement) {
		let phoenixDateElement = phoenixElement.querySelector(".date");
		let phoenixTimeElement = phoenixElement.querySelector(".time");
		let phoenixTime = moment().tz("America/Phoenix");

		phoenixDateElement.innerHTML = phoenixTime.format("dddd, MMMM D, YYYY");
		phoenixTimeElement.innerHTML = phoenixTime.format("h:mm:ss [<small>]A[</small>]");
	}

	//Hawaii
	let parisElement = document.querySelector("#paris");
	if (parisElement) {
		let parisDateElement = parisElement.querySelector(".date");
		let parisTimeElement = parisElement.querySelector(".time");
		let parisTime = moment().tz("Europe/Paris");

		parisDateElement.innerHTML = parisTime.format("dddd, MMMM D, YYYY");
		parisTimeElement.innerHTML = parisTime.format("h:mm:ss [<small>]A[</small>]");
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
	<a href="/">All cities</a>
	`;
}

updateTime();
setInterval(updateTime, 1000);

let citiesSelectElement = document.querySelector("#city");
citiesSelectElement.addEventListener("change", updateCity);