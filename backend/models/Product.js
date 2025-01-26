const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({
  name: { type: String, required: true },
  brand: { type: String, required: true },
  price: { type: Number, required: true },
  category: { type: String, required: true },
  description: { type: String },
  supplierId: { type: mongoose.Schema.Types.ObjectId, ref: 'Supplier', required: true },
});

module.exports = mongoose.model('Product', productSchema);
