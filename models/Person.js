const mongoose = require('mongoose');

// Define schema for Person
const personSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },