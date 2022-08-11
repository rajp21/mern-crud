import mongoose from 'mongoose'; 

const userSchema  = new mongoose.Schema({
    firstName: { type:String,required: true}, 
    lastName: {type: String, required:true},
    email: {type: String, required:true},
    phone: {type: String, required:true},
    company: {type: String, required:true},
}, {timestamps: true}); 

export default mongoose.model('User', userSchema); 