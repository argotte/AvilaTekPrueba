import {sign,verify} from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET as string;
const generateToken=(id:string)=>{
    const jwt= sign({id},JWT_SECRET as string,{expiresIn:"2h"});
    return jwt;
}
const verifyToken=(token:string)=>{
    const ValidUser=verify(token,JWT_SECRET);
    return ValidUser;
}
export {generateToken,verifyToken};