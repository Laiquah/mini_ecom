const {sign, verify} = require('jsonwebtoken')
require('dotenv').config()

function createToken(user){
    return sign({
            userEmail: user.userEmail,
            userPass: user.userPass
    },
    process.env.SECRET_KEY,
    {
        expiresIn: '1h'
    })
}

function verifyAToken(req, res, next){
    try{

    } catch(e){

    }
}

module.exports = { createToken, verifyAToken }