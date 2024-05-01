import { Router } from "express";
import itemModel from "../models/item";
import { getItems, getItem, postItem } from "../controllers/order";
import { checkJWT } from "../middleware/session";
const router = Router();
router.get("/",checkJWT, getItems);
router.get("/:id",checkJWT, getItem);
router.post("/", checkJWT, postItem);
export {router};