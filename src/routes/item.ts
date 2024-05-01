import { getItem, getItems, postItem, updateItem } from "../controllers/item";
import { Request, Response, Router } from "express";

const router = Router();
router.get("/",getItems);
router.get("/:id",getItem);
router.post("/", postItem);
router.put("/:id",updateItem);
router.delete("/:id",updateItem);


export {router};
