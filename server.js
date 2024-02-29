const express = require('express');
const { db } = require('./db');
require('dotenv').config();
const personRoutes = require('./routes/personRoutes');
const menuItemRoutes = require('./routes/menuItemRoutes');
const invoiceRoutes = require('./routes/invoiceRoutes');