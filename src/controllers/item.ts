import { Request, Response } from "express";
import { handleHttp } from "../utils/error.handler";
import { insertItem,getItems as getItemsService, 
    getItemById,updateItem as updateItemService,
    deleteItem as deleteItemService } from "../services/item";
import { msgNotFoundHttp } from "../utils/msgNotFound.handler";

const getItem=async ({params}:Request,res:Response)=>{
    try{  
        const { id } = params;
        const responseItem = await getItemById(id);
        if (!responseItem) {
            msgNotFoundHttp(res, "item");
            return;
        }
        res.send(responseItem);
     }
    catch(error){
        handleHttp(res, "error in get item", error);
    }
}

const getItems=async (req:Request,res:Response)=>{
    try{  
        const response = await getItemsService();
        res.send(response);
     }
    catch(error){
        handleHttp(res, "error in get item", error);
    }
}

const updateItem = async ({ params,body }: Request, res: Response) => {
  try {
    const {id} = params;
    const responseItem = await updateItemService(id, body);
    if (!responseItem) {
      msgNotFoundHttp(res, "item");
      return;
    }
    res.send(responseItem);
  } catch (error) {
    handleHttp(res, "error in update item", error);
  }
};

const postItem= async ({body}:Request,res:Response)=>{
    try{   
        const responseItem=await insertItem(body);
        res.send(responseItem);
    }
    catch(error){
        handleHttp(res,'error in post item',error)
    }
}   

const deleteItem=async({params}:Request,res:Response)=>{
    try{  
        const { id } = params;
        const responseItem=await deleteItemService(id);
        if (!responseItem) {
            msgNotFoundHttp(res, "item");
            return;
        }
        res.send(responseItem);
     }
    catch(error){
        handleHttp(res, "error in delete item", error);
    }
}


export { getItem, getItems, updateItem, postItem, deleteItem};