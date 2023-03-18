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
    res.status(200).json({msg: `User token created.`, token})
}

const dashboard = async (req,res) => {
    const authHeader = req.headers.authorization

    if(!authHeader || !authHeader.startsWith('Bearer ')){
        throw new CustomAPIError('No token provided.', 401)
    }

    const token = authHeader.split(' ')[1]

    try {
        const decoded = jwt.verify(token,process.env.jsonWebToken_Secret)
        
        const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, ${decoded.username}`, secret: `Your lucky number is: ${luckyNumber}`})
    } catch (error) {
        throw new CustomAPIError('Not authorized to use this route.', 401)
    }

    
}

module.exports = {
    login,
    dashboard
}