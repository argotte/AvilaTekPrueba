import { Product } from "../interfaces/product.interface";
import { OrderList } from "../interfaces/order.interface";
import { Schema,Types,model,Model } from "mongoose";
const itemSchemaForTheOrder = new Schema<Product>(
  {
    name: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: false,
    },
    price: {
      type: Number,
      required: false,
    },
    quantity: {
      type: Number,
      required: false,
    },
  },
);
const orderSchema = new Schema<OrderList>(
  {
    product: {
      type: [itemSchemaForTheOrder],
      required: true,
    },
    username: {
      type: String,
      required: false,
    },
  },
  {
    timestamps: true,
    versionKey: false,
  }
);
const orderModel = model("orders", orderSchema);
export default orderModel;