const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/add-product', (req, res) => {
    res.sendFile(path.join(__dirname, '../views/add-product.html'));
});

router.post('/add-product', (req, res) => {
    // You can handle the submitted product here if needed
    res.sendFile(path.join(__dirname, '../views/submited.html'));
});

module.exports = router;