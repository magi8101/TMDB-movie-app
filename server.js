const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

dotenv.config();

const app = express();
const port = 3000;

// Serve static files from the "public" directory
app.use(express.static(path.join(__dirname, 'public')));

// Serve the main HTML file
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'sample.html'));
});

// Endpoint to get environment variables
app.get('/env', (req, res) => {
    res.json({
        API_KEY: process.env.API_KEY
    });
});

app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});
