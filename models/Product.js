const mongoose = require('mongoose');
const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  description: String,
  category: String,
  imageUrl: String,
  stock: { type: Number, default: 0 },
  priceCustomer: { type: Number, required: true },
  priceEngineer: { type: Number, required: true },
  createdAt: { type: Date, default: Date.now }
});

module.exports = mongoose.model('Product', productSchema);