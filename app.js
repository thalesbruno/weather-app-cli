const request = require('request')

const url = 'https://api.darksky.net/forecast/5fe1cf0717790826ad8a112a1e78537d/-12.9777,-38.5016?units=si'

request({ url: url, json: true }, (error, response, body) => {
  const { temperature, precipProbability } = body.currently
  const { summary } = body.daily.data[0]
  console.log(`Today summary: ${summary}`)
  console.log(`It is currently ${temperature} degrees out. There is a ${precipProbability*100}% chance of rain.`)
})