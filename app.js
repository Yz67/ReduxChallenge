const express = require('express');
const app = express();

app.get('/api/v1/shipments', function(req, res) {
  res.send('Target route')
})


app.listen('3000');
console.log("Listening");
