import express from 'express';
import { createSoldItems, getSoldItems, findSoldItems, updateSoldItems, deleteSoldItems } from '../controllers/soldItemsControler.js'

const soldItemRouter = express.Router();

soldItemRouter.route('/').get(getSoldItems)
                         .post(createSoldItems)

soldItemRouter.route('/:barcode').get(findSoldItems)
                                 .put(updateSoldItems)
                                 .delete(deleteSoldItems)

export { soldItemRouter };