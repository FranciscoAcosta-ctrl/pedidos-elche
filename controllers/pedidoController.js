const res = require('express/lib/response');
const { json } = require('express/lib/response');
const Pedido = require('../model/Pedido')
const User = require('../model/Users')

module.exports.mostrar = (req, res)=>{
    Pedido.find({}, (error, pedidos)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando pedidos'
            }) 
        }
        User.find({},(error, user)=>{ res.render('index', {user: user, pedidos: pedidos})})
        return ;
    });
}

module.exports.realizar = (req, res)=>{
    const id = req.params.id
    const estatus = req.params.estatus
    Pedido.findByIdAndUpdate(id, { estatus : "preparando" }, (error, pedido)=>{
        if(error){
            return res.status(500).json({
                message: 'Error borrando pedido'
            }) 
        }
        res.redirect('/');
    })
    }
 module.exports.cancelar = (req, res)=>{
        const id = req.params.id
        const estatus = req.params.estatus
        Pedido.findByIdAndUpdate(id, { estatus : "cancelado" }, (error, pedido)=>{
            if(error){
                return res.status(500).json({
                    message: 'Error borrando pedido'
                }) 
            }
            res.redirect('/');
        })
        }


module.exports.ver = (req, res)=>{
    const id = req.params.id
    Pedido.findById(id, (error, pedido)=>{
        if(error){
            return res.status(500).json({
                message: 'Error mostrando pedidos'
            }) 
        }
        User.find({},(error, user)=>{ res.render('pedido', {user: user, pedido: pedido})})
       
        return ;
        
    })
}
