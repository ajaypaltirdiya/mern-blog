import User from "../models/user.model.js";
import bcryptjs from 'bcryptjs';
import  jwt  from "jsonwebtoken";
import {errorHandler} from '../utils/error.js'

export const signup = async(req,res,next) => {
    const {username,email,password} = req.body;

    if(!username || !email || !password || username==='' || email ==='' || password ===''){
        return next(errorHandler(400,'All fields are required'))
    }
    const user = await User.findOne({email})
    if(user){
        return next(errorHandler(400,'User is already exist with this same email'))
    }
    
    const hashPassword =  bcryptjs.hashSync(password,8)
    const newUser =  new User({username,email,password:hashPassword})


    try {
        await newUser.save();
        res.json("Signup Successfull")
    } catch (error) {
       next(errorHandler(400,error.message))
    }

}

export const signin = async(req,res,next) => {
    const {email,password} = req.body;
    if(!email || !password || email==='' || password===''){
        return next(errorHandler(400,'All fields are required'))
    }
   
    try {
        const validUser = await User.findOne({email})
        if(!validUser){
           return next(errorHandler(400,'Invalid credentials'))
        }
    
        const isMatchPassword = bcryptjs.compareSync(password,validUser.password)
        if(!isMatchPassword){
            return next(errorHandler(400,'Invalid credentials'))
        }

        const token = jwt.sign({userId:validUser._id}, process.env.SECRET_KEY,{expiresIn:'1d'})
        const {password:pass,...rest} = validUser._doc; 
        res.status(200).cookie('auth_token',token,{httpOnly:true}).json(rest)

    } catch (error) {
        next(errorHandler(400,error.message))
    }

}