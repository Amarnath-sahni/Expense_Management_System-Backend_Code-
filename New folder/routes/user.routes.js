import {signup,login, logout, updatePassword, updateProfile} from '../controller/user.controller.js'
import {Router} from 'express';
import { authentication } from '../middleware/auth.middleware.js';

export const userRouter =  new Router();

userRouter.post("/signup", signup);
userRouter.post("/login", login);
userRouter.delete('/logout', logout);
userRouter.put("/update-password/:id",authentication, updatePassword);
userRouter.put("/updateProfile/:id",authentication, updateProfile);

