const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3030;

// Serves static files from the 'client/dist' folder
const distPath = path.join(__dirname, '../client/dist');
app.use(express.static(distPath));
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Requires HTML route
require('./routes/htmlRoutes')(app);

app.listen(PORT, () => console.log(`Now listening on port: ${PORT}`));