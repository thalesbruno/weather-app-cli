const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length > 2) {
  location = process.argv[2]

  geocode(location, (error, place) => {
    if (error) {
      return console.error(error)
    }
    const { place_name, latitude, longitude } = place
    console.log(place_name)
  
    forecast(latitude, longitude, (error, weatherForecast) => {
      if (error) {
        return console.error(error)
      }
      console.log(weatherForecast)
    })
  })
}
else {
  console.warn("No location provided. Try again.")
}



