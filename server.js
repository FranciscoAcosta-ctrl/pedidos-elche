const express = require('express')
const app = express()
const path = require('path')
const db = require('./db');


app.use(express.static('/assets'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({extended:true}));
app.use(express.json());

const pedidos = require("./routes/pedidos")
app.use(pedidos);

app.listen(4000, ()=>{
  console.log("Servidor listo!");
})