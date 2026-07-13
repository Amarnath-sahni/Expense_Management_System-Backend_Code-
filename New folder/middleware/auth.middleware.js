import {userModels }from "../models/user.model.js";
import { CustomError } from "../util/customError.js";
import jwt from "jsonwebtoken";


export const authentication = async (req, res, next) => {
  try {
    // read cookie
    let token = req.cookies?.token;

    if (!token) {
      return next(new CustomError("Please login first", 401));
    }

    // Verify token
    const decodedToken = jwt.verify(token, "secretKey");
    console.log("Decoded Token:", decodedToken);

    // Find user from DB
    const user = await userModels.findById(decodedToken.id);
    if (!user) {
      return next(new CustomError("User not found", 404));
    }

    // Attach user to request
    req.myUser = user;
    next();
  } catch (error) {
    next(error);
  }
};
