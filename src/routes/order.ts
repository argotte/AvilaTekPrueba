import { Router } from "express";
import itemModel from "../models/item";
import { getItems, getItem, postItem } from "../controllers/order";
import { checkJWT } from "../middleware/session";
const router = Router();
/**
 * @swagger
 * components:
 *   securitySchemes:
 *     BearerAuth:            # arbitrary name for the security scheme
 *       type: http
 *       scheme: bearer
 *       bearerFormat: JWT    # optional, arbitrary value for documentation purposes
 * /order:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Orders
 *     summary: Retrieve a list of all orders
 *     responses:
 *       200:
 *         description: A list of orders.
 */
router.get("/", checkJWT, getItems);

/**
 * @swagger
 * /order/{username}:
 *   get:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Orders
 *     summary: Retrieve all orders from a certain username
 *     parameters:
 *       - in: path
 *         name: username
 *         required: true
 *         schema:
 *           type: string
 *     responses:
 *       200:
 *         description: A specific order.
 */
router.get("/:username", checkJWT, getItem);

/**
 * @swagger
 * /order:
 *   post:
 *     security:
 *       - BearerAuth: []
 *     tags:
 *       - Orders
 *     summary: Create a new order
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               product:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name:
 *                       type: string
 *                       example: "Perol"
 *                     quantity:
 *                       type: integer
 *                       example: 4
 *     responses:
 *       201:
 *         description: The created order.
 */
router.post("/", checkJWT, postItem);

export {router};