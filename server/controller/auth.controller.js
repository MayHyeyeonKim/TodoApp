require("dotenv").config()
const authController = {};
const jwt = require("jsonwebtoken")
const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

authController.authenticate = (req, res, next) =>{
    try{
        const tokenString = req.headers.authorization;
        if(!tokenString) throw new Error("invalid token")
        const token = tokenString.replace("Bearer ", "");
        jwt.verify(token, JWT_SECRET_KEY, (error, payload) => {
            if (error) {
                throw new Error("invalid token");
            }
            req.userId = payload._id;
            });
            next();
    }catch(error){
        res.status(400).json({status:"fail", message:error.message})
    }
}

authController.logout = (req,res,next) => {
    try{
        const tokenString = req.headers.authorization;
        if (!tokenString) {
            throw new Error("Invalid token");
        }
        const token = tokenString.replace("Bearer ", "");

        blacklistedTokens.push(token);

        res.status(200).json({ status: 'success', message: 'See you again' });

    } catch(error){
        res.status(400).json({status:'Fail~', message: error.message})
    }
}

module.exports = authController;