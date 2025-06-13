const express = require('express');
const router = express.Router();
const barcodeController = require('../controllers/barcodeController');

router.get('/', barcodeController.getAllBarcodes);
router.get('/:id', barcodeController.getBarcodeById);
router.post('/', barcodeController.createBarcode);
router.delete('/:id', barcodeController.deleteBarcode);

module.exports = router; 