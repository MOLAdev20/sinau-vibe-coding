import { Router } from 'express';
import prisma from '../config/prismaClient.js';

const productRoute = Router();

const validateProductRequest = (payload) => {
  const { title, price, stock, description } = payload;

  if (typeof title !== 'string' || title.trim().length < 3 || title.trim().length > 255) {
    return 'error request validation';
  }

  if (typeof price !== 'number' || Number.isNaN(price)) {
    return 'error request validation';
  }

  if (!Number.isFinite(stock) || !Number.isInteger(stock)) {
    return 'error request validation';
  }

  if (description !== undefined && description !== null && typeof description !== 'string') {
    return 'error request validation';
  }

  return null;
};

productRoute.post('/', async (req, res) => {
  const validationError = validateProductRequest(req.body);

  if (validationError) {
    return res.status(400).json({
      status: 'validation-error',
      message: validationError,
    });
  }

  const { title, price, stock, description } = req.body;

  try {
    const createdProduct = await prisma.product.create({
      data: {
        title: title.trim(),
        price,
        stock,
        description: description || null,
      },
    });

    return res.status(200).json({
      status: 'success',
      message: 'New product successfully added!',
      data: createdProduct,
    });
  } catch (error) {
    if (error?.code === 'P1001') {
      return res.status(503).json({
        status: 'network-error',
        message: 'network error',
      });
    }

    return res.status(500).json({
      status: 'internal-error',
      message: 'internal server error',
    });
  }
});

export default productRoute;
