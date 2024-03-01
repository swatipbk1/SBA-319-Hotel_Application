const express = require('express');
const router = express.Router();
const Person = require('../models/person');
// Create a new person
router.post('/persons', async (req, res) => {
    const newPersonData = req.body;
