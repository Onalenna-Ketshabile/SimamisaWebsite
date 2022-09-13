//Install express server
const express = require('express');
const path = require('path');

const app = express();

// Serve only the static files form the dist directory
app.use(express.static('./dist/simamisa-web-application'));

app.get('/*', (req, res) =>
    res.sendFile('index.html', {root: 'dist/simamisa-web-application/'}),
);

// Start the app by listenig on the default Heroku port
app.listen(process.env.PORT||'8080');