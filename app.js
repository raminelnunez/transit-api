const html = {
  form: document.getElementsByTagName('form')[0],
  streets: document.getElementsByClassName('streets')[0],
  streetName: document.getElementById('stree-name'),
  resultsContainer: document.getElementsByTagName('tbody')[0],
}

//https://api.winnipegtransit.com/v3/stops/10064?api-key=1vbBsFqGS6MWA0hvpBq0

const apiKey = '1vbBsFqGS6MWA0hvpBq0';
const baseURL = 'https://api.winnipegtransit.com/v3/';