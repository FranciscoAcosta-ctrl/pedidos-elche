const User = require('../model/Users')
const {json} = require('express/lib/response')

module.exports.usuarios =  (req, res)=>{
    console.log(User.find())
}