import express from "express";
import { userController } from "./controllers";
const router = express.Router(); 


router.post('/add-user', userController.addUser); 
router.get('/get-users', userController.getUsers); 
router.post('/delete-user', userController.deleteUser); 
router.get('/single-user', userController.getUser); 
router.post('/edit-user', userController.editUser); 


export default router;