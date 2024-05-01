import itemModel from "../models/item";
import { Product } from "../interfaces/product.interface";

const insertItem=async (item:Product)=>{
    const responseInsert=await itemModel.create(item);
    return responseInsert;
};
const getItems=async ()=>{
    const responseGet=await itemModel.find({});
    return responseGet;
}
const getItemById=async (id:string)=>{
    const responseGetById
    =await itemModel.findById(id);
    return responseGetById;
}
const updateItem=async (id:string,data:Product)=>{
    const responseUpdate=await itemModel
    .findOneAndUpdate(
        {_id:id},
        data,
        {new:true,}
    );
    return responseUpdate;
};

const deleteItem=async (id:string)=>{
    const responseDelete=await itemModel
    .findOneAndDelete({_id:id});
    return responseDelete;
}
export {insertItem,getItems,getItemById,updateItem,deleteItem};