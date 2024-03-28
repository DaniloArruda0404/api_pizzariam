const express = require('express');
const routes = require ('./routes');
const path = require ('path')
const app = express();
const db = require('./db');

app.use('/', routes);
 
app.listen(3333, ()=>{
    console.log('servidor rodando');
})
