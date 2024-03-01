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
  // Get a single invoice by ID
router.get('/invoices/:id', async (req, res) => {
    try {
      const invoice = await Invoice.findById(req.params.id);
      if (!invoice) {
        return res.status(404).json({ error: 'Invoice not found' });
      }
      res.status(200).json(invoice);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  });