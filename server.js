const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;
const cors = require('cors');

app.use(cors());

app.use(bodyParser.json());

let storedData = null;

app.post('/api/data', (req, res) => {
    const serialData = req.body.serial;
    console.log('Received serial data:', serialData);
    storedData = serialData;
    res.json({"data": serialData})
});

app.get('/api/data', (req, res) => {
    const responseData = { message: 'message from server', data: 12345 };
    res.json(responseData);
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});






/*
//import './nmea.js'
//const nmea = require('./nmea.js');

const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = 3001;

app.use(bodyParser.json());

// app.post('/api/data', (req, res) => {
//     const serialData = req.body.serial;
//     const serialData2 = "Try 1";

//     console.log('Received serial data:', serialData);

//     //const dataa = new Nmea(serialData);
//     //console.log ('Speed data ', dataa.speed)
//     // res.send('Data received');
//     res.json({"data": serialData})
// });


var qs = require('querystring');
const { default: Speed } = require('./src/pages/main icons/Speed');


app.post('/api/data', (request, response) => {
    if (request.method === 'POST') {
      let body = '';
  
      request.on('data', function (data) {
        body += data;
        // Consider limiting body size here to prevent memory issues
      });
  
      request.on('end', function () {
        try {
          // Check for expected Content-Type header (if applicable)
          if (request.headers['content-type'] === 'text/plain') {
            const post = qs.parse(body);
            RecievedData = body.split(" ");
            console.log(RecievedData[0]);

            // Process the parsed data (access using post['key'])
            // Send a response based on processing results
            response.send('Data received successfully'); // Example response
          } else {
            // Handle unexpected Content-Type
            response.status(400).send('Error: Unsupported content type');
          }
        } catch (error) {
          // Handle potential errors during parsing or processing
          console.error('Error handling POST request:', error);
          response.status(500).send('Internal Server Error');
        }
      });
    } else {
      // Handle non-POST requests (optional)
      response.status(405).send('Method Not Allowed');
    }
  });

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});

*/