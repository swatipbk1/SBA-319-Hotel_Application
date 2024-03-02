const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  guestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest', // Assuming you have a Guest model
    required: true
  },