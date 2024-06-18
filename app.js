const express = require('express');
const app = express();
const port = 8080;

app.get('/', (req, res) => res.send('Hello this is hosted on AWS!'));
app.get('/test', (req, res) => res.send('Added this /test new route just for funnnnn!'));

app.listen(port);
console.log(`App running on http://localhost:${port}`);
