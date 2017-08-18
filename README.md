# Node.js JSON WHOIS API Client
A simple client to retrieve information from jsonwhoisapi.com (jwa). 

## Requirements
Signup for an account at jsonwhoisapi.com. You will need to supply the script your jwa account number and API key.

## Instalation
` npm install node-jwa `

## Usage
```javascript 
var jwa = require('node-jwa');
var jwaConfig = ['jwaAccountNumber', 'jwaAPIKey'];

jwa(jwaConfig, 'google.com').then(function(whois) {
  console.log(whois.registered);
  #Prints 'true' 
});
```

## Further Reading
For additional information about the objects available from the whois lookup, see https://jsonwhoisapi.com/docs/.