import { Router } from 'express';
import {
  createProductHandler,
  deleteProductHandler,
  updateProductHandler,
} from '../controllers/productController.js';

const productRoute = Router();

productRoute.post('/', createProductHandler);
productRoute.put('/:id', updateProductHandler);
productRoute.delete('/:id', deleteProductHandler);

export default productRoute;
