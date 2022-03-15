const { default: mongoose } = require('mongoose');
const moongose = require('mongoose');


const url = 'mongodb+srv://Watcher:stopshacopliss2001@cluster0.gvy94.mongodb.net/chatbotDB?retryWrites=true&w=majority';

const db = moongose.connect(url)
    .then(() => {
        console.log('Conectado a Mongo');
    })
    .catch((e) => {
        console.log('El error de conexion es : ', e);
    })


module.exports = db
