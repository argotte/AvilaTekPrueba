import { logMiddleware } from "../middleware/log";
import { getItem, getItems, postItem, updateItem,deleteItem, getAvailableItems } from "../controllers/item";
import { Request, Response, Router } from "express";

const router = Router();

router.get("/",logMiddleware,getItems);

/**
 * @swagger
 * /item:
 *   get:
 *     tags:
 *       - Items
 *     summary: Retrieve a list of all items
 *     parameters:
 *       - in: query
 *         name: page
 *         schema:
 *           type: integer
 *         description: The page number
 *       - in: query
 *         name: pageSize
 *         schema:
 *           type: integer
 *         description: The number of items per page
 *     responses:
 *       200:
 *         description: A list of items.
 */
/**
 * @swagger
 * /item/available:
 *   get:
 *     tags:
 *       - Items
 *     summary: Retrieve a list of available items
 *     responses:
 *       200:
 *         description: A list of available items.
 */
router.get("/available", logMiddleware, getAvailableItems);

/**
 * @swagger
 * /item/{id}:
 *   get:
 *     tags:
 *       - Items
 *     summary: Retrieve a specific item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A specific item.
 */
router.get("/:id", logMiddleware, getItem);

/**
 * @swagger
 * /item:
 *   post:
 *     tags:
 *       - Items
 *     summary: Create a new item
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               stock:
 *                 type: number
 *     responses:
 *       201:
 *         description: The created item.
 */
router.post("/", logMiddleware, postItem);

/**
 * @swagger
 * /item/{id}:
 *   put:
 *     tags:
 *       - Items
 *     summary: Update a specific item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               price:
 *                 type: number
 *               description:
 *                 type: string
 *               stock:
 *                 type: number
 *     responses:
 *       200:
 *         description: The updated item.
 */
router.put("/:id", logMiddleware, updateItem);

/**
 * @swagger
 * /item/{id}:
 *   delete:
 *     tags:
 *       - Items
 *     summary: Delete a specific item
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: The deleted item.
 */
router.delete("/:id", logMiddleware, deleteItem);

export {router};
