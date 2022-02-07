const cityName = document.getElementById('cityName');
const submitBtn = document.getElementById("submitBtn");

const city_name = document.getElementById('city_name');
const temp = document.getElementById('temp');
const temp_status = document.getElementById('temp_status');

const Datahide = document.querySelector('.middle_layer');


const getInfo = async(event) => {
    event.preventDefault();
    let cityVal = cityName.value;
    if (cityVal == "") {
        city_name.innerText = `please enter the city name`;
        Datahide.classList.add('data_hide');
    } else {
        try {
            let url = `https://api.openweathermap.org/data/2.5/weather?q=${cityVal}&units=metric&appid=dd8ccb9c15cdf30c451a391b65f5b49c`;
            const response = await fetch(url);
            const data = await response.json();
            const arrData = [data];
            city_name.innerText = `${cityVal}, ${arrData[0].sys.country}`;
            temp.innerText = `${arrData[0].main.temp}°C`;
            temp_status.innerText = arrData[0].weather[0].main;

            let tempmood = arrData[0].weather[0].main;

            if (tempmood == "Clear") {
                temp_status.innerHTML = "<i class='fas fa-sun' style='color: #eccc68;'></i>";
            } else if (tempmood == "Clouds") {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            } else if (tempmood == "Rain") {
                temp_status.innerHTML = "<i class='fas fa-cloud-rain' style='color: #a4b0be;'></i>";
            } else {
                temp_status.innerHTML = "<i class='fas fa-cloud' style='color: #f1f2f6;'></i>";
            }

            Datahide.classList.remove('data_hide');

        } catch {
            city_name.innerText = `please enter a valid city `;
            Datahide.classList.add('data_hide');
        }

    }
}

submitBtn.addEventListener('click', getInfo);