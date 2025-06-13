const mongoose = require('mongoose');

const barcodeSchema = new mongoose.Schema({
  value: { type: String, required: true, unique: true },
  label: { type: String },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Barcode', barcodeSchema); 