const search = document.querySelector('#search');
const submit = document.querySelector('#submit')

function getData() {
    fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search.value}&appid=[API_KEY]`)
        .then((res) => {
            return res.json()
        })
        .then((data) => {
            const temp = document.querySelector('#temp');
            const name = document.querySelector('#name');
            const weather = document.querySelector('#weather');
            const description = document.querySelector('#description');

            console.log(data)
            
            temp.textContent = Math.floor(data.main.temp - 273.15) + ' ' + 'C';
            name.textContent = search.value.toUpperCase();
            weather.textContent = data.weather[0].main.toUpperCase();
            description.textContent = data.weather[0].description.toUpperCase()
        })
}

submit.addEventListener('click', function () {
    getData()
})
