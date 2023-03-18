const CustomAPIError = require('../errors/custom-error')
const jwt = require('jsonwebtoken')

const login = async (req,res) =>{
  
    const {username,password} = req.body  

    if(!username || !password){
        throw new CustomAPIError('Please provide email and a password.', 404)
    }

    const id = new Date().getDate()

    const token = jwt.sign({id, username},process.env.jsonWebToken_Secret,{expiresIn: '30d'})

    console.log(username, password);
    res.status(200).json({msg: `User token created, ${token}`})
}

const dashboard = async (req,res) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startWith('Bearer ')){
        throw new CustomAPIError('No token provided.', 401)
    }

    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Saul`, secret: `Your lucky number is: ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}