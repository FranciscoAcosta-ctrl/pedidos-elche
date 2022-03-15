const { json } = require('express/lib/response');
const Pedido = require('../model/Pedido')

module.exports.mostrar = (req, res)=>{
    Pedido.find({}, (error, pedidos)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando pedidos'
            }) 
        }
        return res.render('index',{pedidos: pedidos});
    });
}
