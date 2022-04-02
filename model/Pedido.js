const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const pedidoSchema = new Schema({
    idFacebook: String,
    pago: { 
        empanada: {
            carne: Number,
            chorizo: Number,
            chistorra: Number,
            hawaiana: Number,
            ate: Number,
            elote: Number,
        },
        cortes: {
            arrachera: Number,
            bifeChorrizo: Number,
        },
        cortesTop: {
            ribEye: Number,
            tBone: Number
        },
        conPan: {
            choripan: Number,
            chistorrapan: Number,
        },
        papas: {
            secillas: Number,
            chorizo: Number,
            chistorra: Number,
            arrachera: Number
        }
    }, direccion: {
        ubicacionLocal: String,
        ubicacionEntrega: String
    },
    total: Number,
    estatus: String
}, { versionKey: false });

module.exports = mongoose.model('pedidos',pedidoSchema);

