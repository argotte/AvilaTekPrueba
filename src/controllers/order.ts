import {Request,Response} from "express"
import {JwtPayload} from "jsonwebtoken"
import { handleHttp } from "../utils/error.handler";
import {
  getOrdersService,
  getOrderService,
  insertOrder,
} from "../services/order";
import {getItemByName as getProductByName,updateItem as updateProduct} from "../services/item";
import { msgNotFoundHttp } from "../utils/msgNotFound.handler";
import { Product } from "../interfaces/product.interface";
import { OrderList } from "interfaces/order.interface";
export interface IRequestExtended extends Request {
    user?: string | JwtPayload;
}
export interface INewOrderDTO{
    product:Product[];
    username:string;
}
 const getItems = async (req: IRequestExtended, res: Response) => {
  try {
     const response = await getOrdersService();
      if (!response) {
        msgNotFoundHttp(res, "orders");
        return;
      }
     res.send({data:response,user:req.user});
  } catch (error) {
    handleHttp(res, "error in get orders", error);
  }
};

const getItem = async ({ params }: Request, res: Response) => {
  try {
    const { id } = params;
    const response = await getOrderService(id);
    if (!response) {
      msgNotFoundHttp(res, "order");
      return;
    }
     res.send(response);
  } catch (error) {
    handleHttp(res, "error in get item", error);
  }
};



const postItem = async ( req : IRequestExtended, res: Response) => {
  try {
    const newOrder: INewOrderDTO = {
      product: req.body.product,
      username: (req.user as any).id, // Access the id of the user
    };

    // cada prodcuto existe y tiene stock suficiente
    const existingProducts = [];
for (const product of newOrder.product) {
  const existingProduct = await getProductByName(product.name);
  if (!existingProduct) {
    return res
      .status(400)
      .send({ error: `Product ${product.name} does not exist` });
  }
  if (existingProduct.stock < product.quantity) {
    return res
      .status(400)
      .send({ error: `Not enough stock for product ${product.name}` });
  }
  existingProduct.stock -= product.quantity;
  await updateProduct(existingProduct.id, existingProduct);
  // Add the product to existingProducts as many times as the quantity
  for (let i = 0; i < product.quantity; i++) {
    existingProducts.push(existingProduct);
  }
}
    console.log('relax')
    const dtoOrderList: OrderList = {
      product: existingProducts,
      username: newOrder.username,
    };
    console.log(dtoOrderList);
    const response = await insertOrder(dtoOrderList);
    res.send({ data: response });
  } catch (error) {
    handleHttp(res, "error in post order", error);
  }
};   

export { getItems, getItem, postItem,};