const express = require('express');
const path = require('path');
const app = express();


// serve static files
app.use(express.static('public'));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../public/index.html'));
})

app.listen('4400', () => console.log('Listening on port 4400...'))
