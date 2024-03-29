const User= require("../models/user")



const createUser= async (req,res) => {
    const email = req.body.email;

    const findUser = await User.findOne({email: email});
    if(!findUser){
        //Create a new User
        const newUser = User.create(req.body);
        res.json(newUser);
    }else{
        //User already Exist
        res.json({
            msg:"User already Exist",
            success: false,
        })
    }
}

module.exports = {createUser}