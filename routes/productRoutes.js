const express = require('express');
const router = express.Router();
const productController = require('../controllers/productController');

// GET all products
router.get('/', productController.getAllProducts);

// GET by ID
router.get('/:id', productController.getProductById);

// POST create product
router.post('/', productController.createProduct);

// PUT update product
router.put('/:id', productController.updateProduct);

// DELETE product
router.delete('/:id', productController.deleteProduct);

// Add QR to pool
router.post('/:id/qr-pool/add', productController.addQrToPool);

// Remove QR from pool
router.post('/:id/qr-pool/remove', productController.removeQrFromPool);

module.exports = router;
