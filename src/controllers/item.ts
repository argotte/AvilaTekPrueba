import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

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

const updateItem=(req:Request,res:Response)=>{
    try{   }
    catch(error){
        handleHttp(res,'error in update item')
    }
}

const postItem=({body}:Request,res:Response)=>{
    try{   
        res.send({data:body})
    }
    catch(error){
        handleHttp(res,'error in post item')
    }
}   

const deleteItem=(req:Request,res:Response)=>{
    try{   }
    catch(error){
        handleHttp(res,'error in delete item')
    }
}


export { getItem, getItems, updateItem, postItem };