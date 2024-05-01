import {sign,verify} from "jsonwebtoken";

const JWT_SECRET = process.env.JWT_SECRET;
const generateToken=(id:string)=>{
    const jwt= sign({id},JWT_SECRET as string,{expiresIn:"2h"});
    return jwt;
}
const verifyToken=()=>{}
export {generateToken,verifyToken};