import { Router } from 'express';
import {
  createProductHandler,
  deleteProductHandler,
  getAllProductsHandler,
  getProductByIdHandler,
  updateProductHandler,
} from '../controllers/productController.js';

const productRoute = Router();

productRoute.get('/', getAllProductsHandler);
productRoute.get('/:id', getProductByIdHandler);
productRoute.post('/', createProductHandler);
productRoute.put('/:id', updateProductHandler);
productRoute.delete('/:id', deleteProductHandler);

export default productRoute;
