import dotenv from 'dotenv'; 
dotenv.config(); 

export const  {
    APP_PORT, MONGO_USERNAME, MONGO_PASSWORD, DEBUG_MODE, MONGO_URL
} = process.env; 