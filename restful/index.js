const express = require('express');
const consign = require('consign');
const expressValidator = require('express-validator');

let app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

consign().include('routes').include('utils').into(app);

app.listen(4000, '127.0.0.1', ()=>{
    console.log('Servidor rodando')
});