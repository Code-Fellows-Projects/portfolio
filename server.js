'use strict';

// const { request, response } = require('express');

const express = require('express');

const app = express();
const PORT = process.env.PORT || 3000;

// allows express to server "static files"
app.use(express.static('./public'));


// server route
app.get('/about-us', (request, response) => {
  response.send('I am the about us webpage');
});


// server route - serves a webpage

app.get('/', (request, response) => {
  response.sendFile('./public/index.html');
});

// api route
app.get('/api/cats/coolcat', (request, response) => {
  response.json({ cat: { name: 'cool cat', age: 30 } })
});

// sets up access for incoming traffic port 3000

app.listen(PORT, () => {
  console.log('server up on port 3000');
})

