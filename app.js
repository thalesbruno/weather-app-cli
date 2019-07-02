const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

if (process.argv.length > 2) {
  address = process.argv[2]

  geocode(address, (error, { place_name, latitude, longitude}) => {
    if (error) {
      return console.error(error)
    }
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



