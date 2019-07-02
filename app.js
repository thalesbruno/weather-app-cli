const geocode = require('./utils/geocode')
const forecast = require('./utils/forecast')

geocode('Salvador', (error, data) => {
  console.log(data)
})

forecast(-12.9777, -38.5016, (error, data) => {
  console.error(error)
  console.log(data)
})