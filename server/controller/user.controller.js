const User = require("../model/User")
const bcrypt = require("bcrypt")
const saltRount = 10

const userController = {}

userController.createUser = async(req,res)=>{
    try{
        const {email, name, password} = req.body
        const user = await User.findOne({email})
        if(user){
            throw new Error('already an existing user')
        }
        const salt = bcrypt.genSaltSync(saltRount)
        const hash = bcrypt.hashSync(password, salt);
        console.log("회원가입할 때 비번 해쉬된 값: ", hash)
        const newUser = new User({email, name, password:hash})
        await newUser.save()
        res.status(200).json({status: "success"})
    }catch(err){
        res.status(400).json({status: "fail", err})
    }
}

userController.loginWithEmail= async(req,res)=>{
    try{
        const {email, password} = req.body
        const user = await User.findOne({email}, "-createdAt -updatedAt -__v");
        if(user){
            const isMatch = bcrypt.compareSync(password, user.password);
            if(isMatch){
                const token = user.generateToken();
                return res.status(200).json({status:"success", user, token})
            }
        }
        throw new Error("userId or password is incorrect!")
    }catch(err){
        res.status(400).json({status: "fail~", message: err.message});
    }
};

userController.getUser = async(req,res) =>{
    try{
        const {userId} = req;
        // const user = await User.findById(userId, "-createdAt -updatedAt -__v");
        const user = await User.findById(userId, "-createdAt -updatedAt -__v");

        if(!user){
            throw new Error("can not find user");
        }
        res.status(200).json({ status: "success", user });
    }catch(error){
        res.status(400).json({ status: "userController.getUser에서 fail!!", message: error.message })
    }
}

module.exports = userController;
