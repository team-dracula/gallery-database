const express = require('express');
const app = express();
const { getListingByID } = require('../database/utils.js');
const port = process.env.PORT || 3011;

app.get('/api/:id', (req, res) => {
  getListingByID(req.params.id, (err, results) => {
    if (err) console.error('Error querying database', err);
    else res.send(results);
  });
});

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});