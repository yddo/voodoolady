const express = require('express');
const router = express.Router();

//upload route
router.post('/upload',(req, res) => {
    res.send('file uploaded');
});

module.exports = router;