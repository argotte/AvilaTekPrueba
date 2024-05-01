import { NextFunction, Request, Response } from "express";

const logMiddleware=(req:Request,res:Response,next:NextFunction)=>{
    console.log(`${req.method} ${req.path}`);
    const headers=req.headers;
    const userAgent=headers['user-agent'];
    console.log(`User-Agent: ${userAgent}`);
    next(); 
};

export {logMiddleware};