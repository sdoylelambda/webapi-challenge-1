const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
    res.status(200).json({ projectRouter: "is up" })
});

router.get('/', (req, res) => {
    
});

router.post('/', (req, res) => {
    
});

router.put('/', (req, res) => {
    
});

router.delete('/', (req, res) => {
    
});

module.exports = router;