const express = require('express');
const server = require('file-server');
const middleware = require('body-parser')

const app = express();

const files = require('./routes/files');

//port number
const port = 3000;

app.get('/', (req, res)=>{
    res.send('Voodoo Lady');
});

//middle-ware
app.use(middleware.json());

app.use('/files', files);

//static folder
app.use()

//start server
app.listen(port, () =>{
    console.log('server started on port ' +port);
});
