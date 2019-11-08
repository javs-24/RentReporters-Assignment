const express = require('express');
const bodyParser = require('body-parser');
const querystring = require('querystring');
const fs = require('fs')

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(function (req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  next();
});

//routes
app.get('/api', (req, res) => {
  fs.readFile('data.json', function (err, data) {
    if (err) throw err;
    data = JSON.parse(data)
    res.locals.data = data
    res.status(200).send(res.locals.data)
  });
})

//404 err handling
app.use(function (req, res, next) {
  res.locals.message = 'PAGE NOT FOUND';
  const err = new Error('RESOURCE NOT FOUND');
  err.status = 404;
  return next(err);
});

// Dedicated error handler
app.use(function (err, req, res, next) {
  res.status(404).json(err);
});

app.listen(3000, () => {
  console.log(`server listening on port 3000`);
});

module.exports = app;
