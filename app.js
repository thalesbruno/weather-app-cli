const request = require('request')

const url = 'https://api.darksky.net/forecast/5fe1cf0717790826ad8a112a1e78537d/-12.9777,-38.5016?units=si'
const geocodeURL = 'https://api.mapbox.com/geocoding/v5/mapbox.places/Salvador.json?access_token=pk.eyJ1IjoidGhhbGVzYnJ1bm8iLCJhIjoiY2p4aXpzNDRtMW83dDN4b2dmdzl3cmpuayJ9.jP2DtXE_QFJFBuDq2vSZ1g&limit=1'

// request({ url: url, json: true }, (error, response, body) => {
//   const { temperature, precipProbability } = body.currently
//   const { summary } = body.daily.data[0]
//   console.log(`Today summary: ${summary}`)
//   console.log(`It is currently ${temperature} degrees out. There is a ${precipProbability*100}% chance of rain.`)
// })

request({ url: geocodeURL, json: true }, (error, response, body) => {
  if (error) {
    console.log('Unable to connect with the geocode service.')
  } 
  else if (body.features.length === 0) {
    console.log('No results for your query search.')
  }
  else {
    const { center } = body.features[0]
    const latitude = center[1]
    const longitude = center[0]
    console.log(`latitude: ${latitude}, longitude: ${longitude}`)
  }
})