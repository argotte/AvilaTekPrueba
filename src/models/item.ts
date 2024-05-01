import { Product } from "interfaces/product.interface";
import { Schema,Types,model,Model } from "mongoose";
const itemSchema=new Schema<Product>({
    name:{
        type:String,
        required:true
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    }

},
{
    timestamps:true,
    versionKey:false
});


const itemModel=model('items',itemSchema);
export default itemModel;