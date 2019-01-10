var url = 'https://restcountries.eu/rest/v2/name/';
var countriesList = document.getElementById('countries');

document.getElementById('search').addEventListener('click', searchCountries);

function searchCountries(){
	var countryName = document.getElementById('country-name').value;
	if(!countryName.length)
		countryName = 'Poland';
	
	fetch(url + countryName)
		.then(function(resp){
			return resp.json();
		})
		.then(showCountriesList);
}

function showCountriesList(rest){
	countriesList.innerHTML = "";

	rest.forEach(function(item) {
		var liName = document.createElement('li');
		liName.classList.add('listItem');
		liName.classList.add('second-header');
		liName.innerText = item.name;
		countriesList.appendChild(liName);

		var liFlag = document.createElement('li');
		var flagImg = document.createElement('img');
		flagImg.setAttribute('src', item.flag);
		countriesList.appendChild(flagImg);

		var liCapital = document.createElement('li');
		liCapital.classList.add('listItem');
		liCapital.innerText = item.capital;
		countriesList.appendChild(liCapital);

		var liRegion = document.createElement('li');
		liRegion.classList.add('listItem');
		liRegion.innerText = item.region;
		countriesList.appendChild(liRegion);
	});
}