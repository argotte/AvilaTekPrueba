import {Request,Response} from "express"
import {JwtPayload} from "jsonwebtoken"
import { handleHttp } from "../utils/error.handler";
import {
  getOrdersService,
  getOrderService,
  insertOrder,
} from "../services/order";
import { msgNotFoundHttp } from "../utils/msgNotFound.handler";
export interface IRequestExtended extends Request {
    user?: string | JwtPayload;
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

const postItem = async ({ body }: IRequestExtended, res: Response) => {
  try {
    console.log(body);
    const response = await insertOrder(body);
    res.send(response);
  } catch (error) {
    handleHttp(res, "error in post order", error);
  }
};   

export { getItems, getItem, postItem };