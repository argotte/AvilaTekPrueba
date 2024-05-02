import itemModel from "../models/item";
import { Product } from "../interfaces/product.interface";
import { OrderList } from "../interfaces/order.interface";
import orderModel from "../models/order";

const getOrderService = async (username: string) => {
    const responseGet = await orderModel.find({username});
    return responseGet;
};
const getOrdersService = async (page: number, pageSize: number) => {
    const responseGet = await orderModel.find({})
        .skip((page - 1) * pageSize)
        .limit(pageSize);
    return responseGet;
};
const insertOrder = async (item: OrderList) => {
  const responseInsert = await orderModel.create(item);
  return responseInsert;
};

export { getOrdersService, getOrderService, insertOrder};