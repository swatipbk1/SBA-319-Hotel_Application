const express = require('express');
const router = express.Router();
const Invoice = require('../models/Invoice');
// Create a new invoice
router.post('/invoices', async (req, res) => {
    try {
      const invoiceData = req.body;
      const newInvoice = new Invoice(invoiceData);
      const savedInvoice = await newInvoice.save();
      res.status(201).json(savedInvoice);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: 'Internal Server Error' });
      }
    });
    // Get all invoices
router.get('/invoices', async (req, res) => {
    try {
      const invoices = await Invoice.find();
      res.status(200).json(invoices);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });