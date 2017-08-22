const express = require('express');
const path = require('path');

module.exports = () => {
  const app = express();

  app.use('/static', express.static(path.join(__dirname, 'static')))

  return app;
}