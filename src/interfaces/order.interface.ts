import { Auth } from "./auth.interface";
import { Product } from "./product.interface";

export interface OrderList {
    product: Product[];
    username: String;
}