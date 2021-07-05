
    function displayValues(city) {

        let name = city.list[0].name
        let temp = city.list[0].main.temp
        let humidity = city.list[0].main.humidity
        let weather = city.list[0].weather[0].main
        let wind_speed = city.list[0].wind.speed

        console.log(name, temp, humidity, weather, wind_speed);
        result.innerHTML=name
        result1.innerHTML=`${temp}°C`
        result2.innerHTML=`${humidity}% `
        result3.innerHTML=weather
        result4.innerHTML=`${wind_speed}m/s `




    }
   

    function fetchWeather() {
        let city_name = city.value
        let api = "f1e566a49fbf8864e578efb4377fd1d3"
        let url = `https://api.openweathermap.org/data/2.5/find?q=${city_name}&units=metric&appid=${api}`;

        fetch(url).then(res => {
            if (!(res.ok)) { 
                throw new Error("failed to fetch data") 
            }
            else {
                return res.json() 
            }
        }).then(data => displayValues(data)).catch(error => alert(error.message))
       
    }


