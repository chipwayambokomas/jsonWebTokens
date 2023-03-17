
const login = async (req,res) =>{
    res.send('Fake login/regidter/signup')
}

const dashboard = async (req,res) => {
    const luckyNumber = Math.floor(Math.random()*100)
    res.status(200).json({msg:`Hello, Saul`, secret: `Your luck number is: ${luckyNumber}`})
}

module.exports = {
    login,
    dashboard
}