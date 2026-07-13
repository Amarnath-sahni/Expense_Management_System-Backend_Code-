import jwt from "jsonwebtoken"

export const generateToken = (id) =>{
    return jwt.sign({id}, "secretKey", {expiresIn: "1d"});
};

//1payload, 2.secrete key, 3. signature(optional)