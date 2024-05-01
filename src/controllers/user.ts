import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";

const getUser=(req:Request,res:Response)=>{
    try{   }
    catch(error){
        handleHttp(res,'error in get User')
    }
}

const getUsers=(req:Request,res:Response)=>{
    try{   }
    catch(error){
        handleHttp(res,'error in get Users')
    }
}

const updateUser=(req:Request,res:Response)=>{
    try{   }
    catch(error){
        handleHttp(res,'error in update User')
    }
}

const postUser=({body}:Request,res:Response)=>{
    try{   
        res.send({data:body})
    }
    catch(error){
        handleHttp(res,'error in post User')
    }
}   

const deleteUser=(req:Request,res:Response)=>{
    try{   }
    catch(error){
        handleHttp(res,'error in delete User')
    }
}


export { getUser, getUsers, updateUser, postUser };