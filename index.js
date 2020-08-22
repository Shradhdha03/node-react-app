const express = require('express');
const path = require('path');
const quotes = require('./quotes.json');
const app = express();

// Serve the static files from the React app
app.use(express.static(path.join(__dirname, 'client/build')));

// An api endpoint that returns a list of quotes
app.get('/api/quotes', (req, res) => {
    res.json(quotes);
});

const port = process.env.PORT || 3005;
app.listen(port);
console.log('App is listening on port ' + port);