const express = require('express');
const { db } = require('./db');
require('dotenv').config();
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');

const app = express();
app.use(express.json());


// Log incoming requests
app.use((req, res, next) => {
    console.log(`${req.method} ${req.url}`);
    console.log('Request body:', req.body);
    next();
});

app.get('/', function (req, res) {
    res.send('Welcome to our Hotel');
})

// Use the routers
app.use('/api', personRoutes);
app.use('/menu', menuItemRoutes);
app.use('/serial', invoiceRoutes);