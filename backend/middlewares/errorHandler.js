import { ValidationError } from "joi";
import { DEBUG_MODE } from "../config";


const errorHandler = (err, req, res, next) => {
    let statusCode = 500; 
    
    let data = { 
        message: 'Internal server Error', 
        ...(DEBUG_MODE === 'true' && {originalError: err.message})
    }

    if(err instanceof ValidationError){
        statusCode= 422; 
        data = {
            message: err.message
        }
    }

    console.log('coming here'); 
    return res.json(data); 
    return res.status(statusCode).json(data); 
}

export default errorHandler; 