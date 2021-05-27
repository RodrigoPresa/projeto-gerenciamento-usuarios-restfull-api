const express = require('express');
const consign = require('consign');
const expressValidator = require('express-validator');

let app = express();

app.use(express.json({limit: '50mb'}));
app.use(express.urlencoded({ extended: false, limit: '50mb'}));

consign().include('routes').include('utils').into(app);

app.listen(4000, '127.0.0.1', ()=>{
    console.log('Servidor rodando')
});