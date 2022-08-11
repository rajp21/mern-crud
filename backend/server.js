import express from 'express'; 
import { APP_PORT, MONGO_PASSWORD, MONGO_USERNAME } from './config';
import router from './routes'; 
import mongoose from 'mongoose'; 
import errorHandler from './middlewares/errorHandler'; 


const app = express(); 

// database connection 
mongoose.connect(`mongodb+srv://raj:${MONGO_PASSWORD}@cluster0.bl1kj1n.mongodb.net/management?retryWrites=true&w=majority`).then((res) => {
    console.log("connected"); 
}).catch((e) => {
    console.log(e.message); 
    console.log("not connected"); 
}); 


app.use(express.urlencoded({extended: false})); 
app.use(express.json()); 
app.use('/api', router); 

app.use(errorHandler); 

app.listen(APP_PORT , () => {
    console.log(`servre started at port ${APP_PORT}`)
}); 