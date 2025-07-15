    const apiKey = '7caf9f0ea915b65afd4f136881e9fb5c';
    const apiUrl = 'https://api.openweathermap.org/data/2.5/weather';

    const imagemClima = document.getElementById('iconeClima');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const locationElement = document.getElementById('location');
    const countryElement = document.getElementById('country');
    const temperatureElement = document.getElementById('temperature');
    const feelsLikeElement = document.getElementById('feelsLike');
    const windElement = document.getElementById('wind');
    const tempMaxElement = document.getElementById('tempMax');


    const descriptionElement = document.getElementById('description');

    window.addEventListener('load', () => {
        navigator.geolocation.getCurrentPosition(
            (position) => {
                const lat = position.coords.latitude;
                const lon = position.coords.longitude;
                fetchWeatherCoord(lat, lon);
            }
        )
    });

    function fetchWeatherCoord(lat,lon) {
        const url = `${apiUrl}?lat=${lat}&lon=${lon}&appid=${apiKey}&units=metric`;
        fetchWeather(url);
    }   

    searchButton.addEventListener('click', () => {
        const locationValue = searchInput.value;
            if(locationValue){
                fetchWeatherCity(locationValue);
            }
        }
    );

    function fetchWeatherCity(locationValue) {
        const url = `${apiUrl}?q=${locationValue}&appid=${apiKey}&units=metric`;
        fetchWeather(url);
    }

const countryNames = {
    "BR": "Brazil",
    "US": "United States",
    "FR": "France",
    "ES": "Spain",
    "AL": "Germany",
    "PT": "Portugal",
    "IT": "Italy",
    "JP": "Japan",
    "CN": "China",
    "IN": "India",
    "RU": "Russia",
    "GB": "United Kingdom",
    "CA": "Canada",
    "AU": "Australia",
    "MX": "Mexico",
    "AR": "Argentina",
    "CO": "Colombia",
    "PE": "Peru",
    "CL": "Chile",
    "PS": "Palestine",
    "VE": "Venezuela",
    "ZA": "South Africa",
    "NG": "Nigeria",
    "EG": "Egypt",
    "KE": "Kenya",
    "TZ": "Tanzania",
    "GH": "Ghana",
    "MA": "Morocco",
    "DZ": "Algeria",
    "SA": "Saudi Arabia",
    "AE": "United Arab Emirates",
    "PA": "Panama",
    "KR": "South Korea",
    "TW": "Taiwan",
    "TH": "Thailand",
    "VN": "Vietnam",
    "MY": "Malaysia",
    "PH": "Philippines",
    "SG": "Singapore",
    "ID": "Indonesia",
    "PK": "Pakistan",
    "BD": "Bangladesh",
    "UA": "Ukraine",
    "PL": "Poland",
    "NL": "Netherlands",
    "BE": "Belgium",
    "CH": "Switzerland",
    "SE": "Sweden",
    "NO": "Norway",
    "FI": "Finland",
    "DK": "Denmark",
    "IE": "Ireland",
    "NZ": "New Zealand",
    "IL": "Israel",
    "IR": "Iran",
    "IQ": "Iraq",
    "SY": "Syria",
    "AF": "Afghanistan",
    "NP": "Nepal",
    "LK": "Sri Lanka",
    "MM": "Myanmar",
    "KH": "Cambodia",
    "ET": "Ethiopia",
    "SD": "Sudan",
    "UG": "Uganda",
    "ZM": "Zambia",
    "ZW": "Zimbabwe",
    "AO": "Angola",
    "CU": "Cuba",
    "DO": "Dominican Republic",
    "EC": "Ecuador",
    "BO": "Bolivia",
    "PY": "Paraguay",
    "UY": "Uruguay",
    "CR": "Costa Rica",
    "GT": "Guatemala",
    "HN": "Honduras",
    "SV": "El Salvador",
    "NI": "Nicaragua",
    "QA": "Qatar",
    "KW": "Kuwait",
    "OM": "Oman",
    "YE": "Yemen",
    "AZ": "Azerbaijan",
    "KZ": "Kazakhstan",
    "GE": "Georgia",
    "AM": "Armenia",
    "CZ": "Czech Republic",
    "HU": "Hungary",
    "GR": "Greece",
    "RO": "Romania",
    "BG": "Bulgaria",
    "SK": "Slovakia",
    "SI": "Slovenia",
    "HR": "Croatia",
    "RS": "Serbia",
    "BA": "Bosnia and Herzegovina",
    "MK": "North Macedonia",
    "ME": "Montenegro",
    "IS": "Iceland",
    "LU": "Luxembourg",
    "LI": "Liechtenstein",
    "MT": "Malta",
    "MC": "Monaco",
    "SM": "San Marino",
    "VA": "Vatican City",
    "AD": "Andorra",
    "AG": "Antigua and Barbuda",
    "BB": "Barbados",
    "BS": "Bahamas",
    "BH": "Bahrain",
    "BJ": "Benin",
    "BT": "Bhutan",
    "BW": "Botswana",
    "BF": "Burkina Faso",
    "BI": "Burundi",
    "CV": "Cape Verde",
    "CF": "Central African Republic",
    "TD": "Chad",
    "KM": "Comoros",
    "CG": "Congo (Brazzaville)",
    "CD": "Congo (Kinshasa)",
    "DJ": "Djibouti",
    "DM": "Dominica",
    "GQ": "Equatorial Guinea",
    "ER": "Eritrea",
    "FJ": "Fiji",
    "GA": "Gabon",
    "GM": "Gambia",
    "GN": "Guinea",
    "GW": "Guinea-Bissau",
    "GY": "Guyana",
    "HT": "Haiti",
    "JM": "Jamaica",
    "JO": "Jordan",
    "LA": "Laos",
    "LS": "Lesotho",
    "LR": "Liberia",
    "MG": "Madagascar",
    "MW": "Malawi",
    "MV": "Maldives",
    "ML": "Mali",
    "MR": "Mauritania",
    "MU": "Mauritius",
    "FM": "Micronesia",
    "MD": "Moldova",
    "MN": "Mongolia",
    "MZ": "Mozambique",
    "NR": "Nauru",
    "NE": "Niger",
    "PG": "Papua New Guinea",
    "RW": "Rwanda",
    "KN": "Saint Kitts and Nevis",
    "LC": "Saint Lucia",
    "VC": "Saint Vincent and the Grenadines",
    "WS": "Samoa",
    "ST": "Sao Tome and Principe",
    "SN": "Senegal",
    "SC": "Seychelles",
    "SL": "Sierra Leone",
    "SB": "Solomon Islands",
    "SO": "Somalia",
    "SS": "South Sudan",
    "SR": "Suriname",
    "SZ": "Eswatini",
    "TJ": "Tajikistan",
    "TL": "Timor-Leste",
    "TG": "Togo",
    "TO": "Tonga",
    "TT": "Trinidad and Tobago",
    "TM": "Turkmenistan",
    "TV": "Tuvalu",
    "UZ": "Uzbekistan",
    "VU": "Vanuatu",
    "EH": "Western Sahara",
    "NA": "Namibia",
    "XK": "Kosovo"
    }

    function fetchWeather(url){
        fetch(url)
        .then(response => response.json())
        .then(data => {
            locationElement.textContent = data.name ;
            countryElement.textContent = ', ' + countryNames[data.sys.country] || data.sys.country;
            temperatureElement.textContent = `${Math.round(data.main.temp)}°C`;
            feelsLikeElement.textContent = `${Math.round(data.main.feels_like)}°C`;
            windElement.textContent = `${Math.round(data.wind.speed * 3.6)} km/h`;
            descriptionElement.textContent = data.weather[0].description + '.';
            tempMaxElement.textContent = `${Math.round(data.main.temp_max)}°C`;
            const weatherMain = data.weather[0].main;
            const icon = data.weather[0].icon; 
            const isDay = icon.includes("d"); 
            atualizarImagem(weatherMain, isDay);
        })
        .catch(error => {
            console.error("Error fetching weather data:", error);
            if(locationElement){
                alert("Oh no! We couldn't find the location you entered. Please try again."); 
                locationElement.textContent = " ";
                countryElement.textContent = " ";
                temperatureElement.textContent = " ";
                feelsLikeElement.textContent = " ";
                descriptionElement.textContent = " ";
                windElement.textContent = " ";
            }
        })
    }

    function atualizarImagem(weatherMain, isDay) {
    const imagemClima = document.getElementById('image');
    const body = document.body;

    const periodo = isDay ? "day" : "night";

    const imagens = {
        "Clear_day": "assets/clear-day.svg",
        "Clear_night": "assets/clear-night.svg",
        "Clouds_day": "assets/cloudy.svg",
        "Clouds_night": "assets/cloudy.svg",
        "Rain_day": "assets/rain.svg",
        "Rain_night": "assets/rain.svg",
        "Drizzle_day": "assets/drizzle.svg",
        "Drizzle_night": "assets/drizzle.svg",
        "Thunderstorm_day": "assets/thunderstorm.svg",
        "Thunderstorm_night": "assets/thunderstorm.svg",
        "Snow_day": "assets/snow.svg",
        "Snow_night": "assets/snow.svg",
        "Tornado_day": "assets/tornado.svg",
        "Tornado_night": "assets/tornado.svg",
        "Mist_day": "assets/mist.svg",
        "Mist_night": "assets/mist.svg",
        "Fog_day": "assets/fog.svg",
        "Fog_night": "assets/fog.svg",
    };

    const fundos = {
        "Clear_day": "lightBlue",
        "Clear_night": "darkBlue",
        "Clouds_day": "grey",
        "Clouds_night": "darkGrey",
        "Rain_day": "blueGrey",
        "Rain_night": "darkBlueGrey",
        "Drizzle_day": "lightBlueGrey",
        "Drizzle_night": "midnightBlue",
        "Thunderstorm_day": "darkBlue",
        "Thunderstorm_night": "black",
        "Snow_day": "lightGrey",
        "Snow_night": "darkGrey",
        "Tornado_day": "grey",
        "Tornado_night": "black",
        "Mist_day": "lightGrey",
        "Mist_night": "darkGrey",
        "Fog_day": "lightGrey",
        "Fog_night": "darkGrey",
    };

    const chave = `${weatherMain}_${periodo}`;
    const imagemSelecionada = imagens[chave] || "assets/clear-day.svg";
    imagemClima.src = imagemSelecionada;

    Object.values(fundos).forEach(cor => body.classList.remove(cor));

    const fundoSelecionado = fundos[chave] || "lightBlue";
    body.classList.add(fundoSelecionado);
    console.log("Fundo Selecionado:" + fundoSelecionado)
    }
