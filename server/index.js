const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const path = require('path');

app.use(morgan('dev'));

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(express.static(path.join(__dirname, '../public')));

// app.use('/api', require('./apiRoutes'));
// matches all requests to /api

app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'));
});

app.use((err, req, res, next) => {
  console.error(err);
  console.error(err.statk);
  res.status(err.status || 500).send(err.message || 'Internal server error');
});

const port = process.env.PORT || 1337;
app.listen(port, function () {
  console.log(`Personal Site server listening on port ${port}`);
});

module.exports = app;
