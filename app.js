const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Local GitHub Actions Runner Demo'
  });
});

module.exports = app;
