const express = require('express');
const server = require('file-server');
const middleware = require('body-parser');
const mongoose = require('mongoose');
const path = require('path');


const app = express();

const files = require('./routes/files');

//connect to database
mongoose.connect('mongodb://localhost/voodoolady');

//port number
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Voodoo Lady');
});

//middle-ware
app.use(middleware.json());

app.use('/files', files);

// Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.listen(port, () =>{
    console.log('server started on port ' +port);
});
