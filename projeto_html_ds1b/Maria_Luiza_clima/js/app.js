const apiKey = 'ca4bb9cb23150637d943cd7c56b1cdee'; // Altere para sua cidade desejada
var city = '';
var temperatureElement = document.getElementById('temperature');
var weatherImageElement = document.getElementById('weather-image');

// Evento de click para pegar a cidade do input
document.getElementById('searchButton').addEventListener('click', function () {
    var textInput = document.getElementById('textInput').value;
    city = textInput;
    document.getElementById('textInput').value = ''; // Limpa o campo de texto após a pesquisa

    fetchWeatherData();
});

// Função para buscar dados de clima
async function fetchWeatherData() {
    try {
        var response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`);
        var data = await response.json();
        var temperature = data.main.temp;
        updateWeatherDisplay(temperature);
    } catch (error) {
        temperatureElement.textContent = "Erro ao obter dados do clima.";
    }
}

function updateWeatherDisplay(temperature) {
    temperatureElement.textContent = `Temperatura: ${temperature}°C`;

        if (temperature > 30) {
        weatherImageElement.innerHTML = `<img src="img/muitocalor.jpeg" alt="Clima escaldante" id= "foto" >`;
    }
    else if (temperature >= 19.99 && temperature <= 29.99) {
        weatherImageElement.innerHTML = `<img src="img/ensolarado.jpeg" alt="Dia ensolarado" id= "foto">`;
    }
    else if (temperature >= 9.99 && temperature < 19.99) {
        weatherImageElement.innerHTML = `<img src="img/nublado.jpeg" alt="Clima ameno" id= "foto">`;
    }
    else if (temperature >= 1 && temperature < 9.99) {
        weatherImageElement.innerHTML = `<img src="img/geada.jpeg" alt="Clima frio e com geada" id= "foto">`;
    }
    else {
        weatherImageElement.innerHTML = `<img src="img/neve.jpg" alt="Clima muito gelado" id= "foto">`;
    }
}