const http = require('http');
const express = require('express');
const { asyncRoute } = require('@parameter1/base-cms-utils');

const { error } = console;
const app = express();

app.get('/hello-world', express.json(), asyncRoute(async (req, res) => {
  console.log('hitting hellow wolrd: ');
  res.send('hello world');
}));

app.use((req, res) => {
  console.log('hitting 404');
  res.status(404);
  res.send();
});

app.use((err, req, res) => {
  error(err.stack);
  res.status(err.statusCode || 500).send({
    message: err.message,
  });
});

module.exports = http.createServer(app);
