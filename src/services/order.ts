import itemModel from "../models/item";
import { Product } from "../interfaces/product.interface";
import { OrderList } from "../interfaces/order.interface";
import orderModel from "../models/order";

const getOrderService = async (id: string) => {
    const responseGet = await orderModel.findById(id);
    return responseGet;
};
 const getOrdersService = async () => {
    const responseGet = await orderModel.find({});
    return responseGet;
};
const insertOrder = async (item: OrderList) => {
  const responseInsert = await orderModel.create(item);
  return responseInsert;
};
export { getOrdersService, getOrderService, insertOrder };