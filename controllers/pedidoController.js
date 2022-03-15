const res = require('express/lib/response');
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

module.exports.borrar = (req, res)=>{
    const id = req.params.id
    const estatus = req.params.estatus
    Pedido.findByIdAndUpdate(id, { estatus : "Cancelado" }, (error, pedido)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando pedidos'
            }) 
        }
        res.redirect('/');
    })
    console.log("cancelar");
    }


module.exports.ver = (req, res)=>{
    const id = req.params.id
    Pedido.findById(id, (error, pedido)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando pedidos'
            }) 
        }
        console.log(pedido)
        return res.render('pedido',{pedido: pedido})
        
    })
}
