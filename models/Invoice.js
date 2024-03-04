const mongoose = require('mongoose');

const invoiceSchema = new mongoose.Schema({
  guestId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Guest', // Assuming you have a Guest model
    required: true
  },
  items: [{
    name: {
      type: String,
      required: true
    },
    description: {
      type: String,
      required: true
    },
    quantity: {
      type: Number,
      required: true
    },
    price: {
      type: Number,
      required: true
    }
  }],
  totalAmount: {
    type: Number,
    required: true
  },
  status: {
    type: String,
    enum: ['pending', 'paid', 'void'], // Assuming these are the possible statuses
    default: 'pending'
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

// Define indexes
invoiceSchema.index({ guestId: 1 }); // Index for guestId field
invoiceSchema.index({ status: 1 }); // Index for status field

const Invoice = mongoose.model('Invoice', invoiceSchema);

module.exports = Invoice;