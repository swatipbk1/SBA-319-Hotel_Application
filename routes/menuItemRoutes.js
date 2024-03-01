const express = require('express');
const router = express.Router();
const MenuItem = require('./../models/MenuItem');
// POST Method to add a Menu Item
router.post('/', async (req, res) =>{
    try{