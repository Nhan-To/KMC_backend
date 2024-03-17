import express from "express";
import { createItems, getItems, findItems, updateItems, deleteItems } from "../controllers/ItemsController.js"

const itemRouter = express.Router()

itemRouter.route('/').get(getItems)
                     .post(createItems)

itemRouter.route('/:param').get(findItems)
                             .put(updateItems)
                             .delete(deleteItems)

export { itemRouter } 