const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

app.post('/api/data', (req, res) => {
    const serialData = req.body.serial;
    console.log('Received serial data:', serialData);
    // res.send('Data received');
    res.json({"data": serialData})
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
