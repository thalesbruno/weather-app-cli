weather-app
===========
Weather app

<!--ts-->
Table of contents
-----------------
* [request](#request)
* [toFixed](#tofixed)
<!--te-->

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
