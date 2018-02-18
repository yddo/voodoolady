const express = require('express');
const router = express.router();
const server = require('file-server');

//upload route
router.post('/upload',(req, res, err)=>{
    res.send('file uploade');
});

module.exports = router;