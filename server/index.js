const express = require('express');
const bodyParser = require('body-parser');
const pino = require('express-pino-logger')();

const response = require('./response.json')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(pino);

app.get('/api/tasks', (req, res) => {
  res.setHeader('Content-Type', 'application/json');
  res.setHeader('Access-Control-Allow-Origin', '*');
  res.send(JSON.stringify({ response }));
});

app.listen(3001, () =>
  console.log('Express server is running on localhost:3001')
);
