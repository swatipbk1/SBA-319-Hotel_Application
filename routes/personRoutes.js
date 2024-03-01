const express = require('express');
const router = express.Router();
const Person = require('../models/person');
// Create a new person
router.post('/persons', async (req, res) => {
    const newPersonData = req.body;
    try {
        const newPerson = new Person(newPersonData);
        const savedPerson = await newPerson.save();
        res.status(201).json(savedPerson);
    } catch (error) {
        res.status(400).json({ message: error.message });
    }
});
