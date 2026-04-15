import { Router } from 'express';
import {
  createProductHandler,
  updateProductHandler,
} from '../controllers/productController.js';

const productRoute = Router();

productRoute.post('/', createProductHandler);
productRoute.put('/:id', updateProductHandler);

export default productRoute;
