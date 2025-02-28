const filterWeatherData = (data) => {

    const { address, latitude, longitude, resolvedAddress, timezone, description, days } = data


    const filteredData = {
        location: {
            address,
            resolvedAddress,
            latitude,
            longitude,
            timezone,

        },
        weather: {
            date: days[0].datetime,
            description,
            temperature: {
                current: days[0].temp,
                max: days[0].tempmax,
                min: days[0].tempmin,
                feelsLike: days[0].feelslike,
            },
            humidity: days[0].humidity,
            dew: days[0].dew,
            precipitation: days[0].precip,
            wind: {
                speed: days[0].windspeed,
                gust: days[0].windgust,
                directio: days[0].winddir
            },
            pressure: days[0].pressure,
            cloudCover: days[0].cloudcover,
            visibility: days[0].visibility,
            uvIndex: days[0].uvindex,
            icon: days[0].icon,
            sunMoon: {
                sunrise: days[0].sunrise,
                sunset: days[0].sunset,
                moonPhase: days[0].moonphase
            }

        }
    }

    return filteredData

}


export { filterWeatherData }
