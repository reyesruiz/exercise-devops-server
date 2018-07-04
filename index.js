require('dotenv').config()

const assert = require('assert');
const express = require('express');
const cors = require('cors');
const morgan = require('morgan');
const winston = require('winston');

assert(process.env.PORT, 'process.env.PORT is missing.');

const app = express();

app.set('port', process.env.PORT);

app.use(cors({
  origin: (origin, callback) => {
    if ((process.env.CORS_WHITELIST || '').split(',').includes(origin)) {
      callback(null, true);
    } else {
      callback(new Error('Not allowed by CORS.'));
    }
  }
}));

app.use(morgan('common'));

app.get('/', (req, res) => {
  res.json({ message: `The timestamp is ${new Date().toISOString()}.` });
});

app.use((error, req, res, next) => {
  res.status(500).json({ message: error.message });
});

const server = app.listen(app.get('port'), () => {
  winston.info(`Listening on port ${server.address().port}...`);
});
