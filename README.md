Weather App CLI
===========
Weather app command line version. For the web version, see https://github.com/thalesbruno/weather-app-web

<!--ts-->
Table of contents
-----------------
* [Installation and usage](#installation-and-usage)
* [Technologies covered](#technologies-covered)
  * [request](#request)
  * [toFixed](#tofixed)
<!--te-->

Installation and usage
======================

Clone repository  
```bash
git clone https://github.com/thalesbruno/weather-app-cli
```

On brand new weather-app-cli directory created, run `npm install` to install all project dependencies.  

So, you'll be already able to start the app using `node app.js`.  

As an example of usage, let's look Salvador, Bahia, Brazil summary report:

```bash
node app.js salvador
```

Technologies covered
====================

request
-------
>Request is designed to be the simplest way possible to make http calls. It supports HTTPS and follows redirects by default.

Install
```bash
npm i request
```

Usage
```javascript
const request = require('request')
request('http://www.google.com', function (error, response, body) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  console.log('body:', body); // Print the HTML for the Google homepage.
})
```

:page_facing_up: [Read the docs](https://www.npmjs.com/package/request)

toFixed
-------
>The toFixed() method formats a number using fixed-point notation.

:page_facing_up: [Read the docs](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Number/toFixed)
