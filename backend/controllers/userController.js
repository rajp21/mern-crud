import { User } from "../models";
import Joi from "joi";

const userContorller =  {
    async addUser(req,res,next){
        const {firstName, lastName, email, phone, company} = req.body; 
        const userSchema = Joi.object({
            firstName: Joi.string().max(30).min(2).required(), 
            lastName: Joi.string().max(30).min(2).required(), 
            email: Joi.string().email().required(), 
            phone: Joi.string().max(12).required(), 
            company: Joi.string().max(12).required(), 
        }); 

        const {error} = userSchema.validate(req.body); 
        if(error){
            return next(error); 
        }

        const user = new User({
            firstName, 
            lastName, 
            email, 
            phone, 
            company
        }); 

        try{
            const response = await user.save(); 
            return res.status(200).json(response); 
        }catch(e){
            return next(e); 
        }
    },

    // get users 
    async getUsers(req,res,next){
        try{
            const users = await User.find(); 

            return res.status(200).json(users); 

        }catch(e){
            console.log(e); 
            return next(e); 
        }
    },

    async deleteUser(req,res, next){
        console.log('deleteing'); 
        try{
            const {id} = req.body; 
            const data = await User.deleteOne({id: id}); 
            const users = await User.find(); 
            return res.status(200).json(users); 
        }catch(e){
            return next(e); 
        }
    }, 

    async getUser(req,res,next){
        try{
            const user = await User.findOne({id: req.params.id}); 
            return res.status(200).json(user); 
        }catch(e){
            return next(e); 
        }
    }, 

    async editUser(req,res,next){
        try{
            const {id, firstName, lastName, email, phone, company} = req.body; 
            const data = await User.updateOne({id: req.body.id}, {firstName,lastName, email, phone,company}); 

            return res.status(201).json(data); 
        }catch(e){
            return next(e); 
        }
    }
}


export default userContorller; 