import { logMiddleware } from "../middleware/log";
import { getItem, getItems, postItem, updateItem,deleteItem, getAvailableItems } from "../controllers/item";
import { Request, Response, Router } from "express";

const router = Router();
router.get("/",logMiddleware,getItems);
router.get("/available", logMiddleware, getAvailableItems);
router.get("/:id", logMiddleware, getItem);
router.post("/", logMiddleware, postItem);
router.put("/:id", logMiddleware, updateItem);
router.delete("/:id", logMiddleware, deleteItem);


export {router};
