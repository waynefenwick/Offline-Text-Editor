const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

// Serve frontend files and the dist folder from the 'client' directory
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));

// Serve the favicon.ico file from the 'client' folder
const faviconPath = path.join(__dirname, '../client/favicon.ico');
app.use('/favicon.ico', express.static(faviconPath));

// Serve the src-sw.js file from the 'client' folder
const srcSwPath = path.join(__dirname, '../client/src-sw.js');
app.use('/src-sw.js', express.static(srcSwPath));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires HTML route
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));
