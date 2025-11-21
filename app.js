const express = require('express');
const app = express();

// Default route
app.get('/', (req, res) => {
  res.json({
    status: 'ok',
    message: 'Hello from Local CI Runner Demo App!  Your app is running successfully. I appreciate you testing out the Local CI Runner project.',
  });
});

module.exports = app;
