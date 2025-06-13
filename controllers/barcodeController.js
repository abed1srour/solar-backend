const Barcode = require('../models/Barcode');

exports.getAllBarcodes = async (req, res) => {
  try {
    const barcodes = await Barcode.find();
    res.json(barcodes);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.getBarcodeById = async (req, res) => {
  try {
    const barcode = await Barcode.findById(req.params.id);
    if (!barcode) return res.status(404).json({ message: 'Barcode not found' });
    res.json(barcode);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBarcode = async (req, res) => {
  try {
    const newBarcode = new Barcode(req.body);
    const saved = await newBarcode.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.deleteBarcode = async (req, res) => {
  try {
    const deleted = await Barcode.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ message: 'Barcode not found' });
    res.json({ message: 'Barcode deleted' });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
}; 