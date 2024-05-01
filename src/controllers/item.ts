import { Request, Response } from "express";
import { handleHttp } from "utils/error.handler";

const getItem=(req:Request,res:Response)=>{
    try{   }
    catch(error){
        handleHttp(res,'error in get item')
    }
}

const getItems=(req:Request,res:Response)=>{
    try{   }
    catch(error){
        handleHttp(res,'error in get items')
    }
}
export {getItem,getItems};