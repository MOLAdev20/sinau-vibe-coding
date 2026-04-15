import {
  createProduct,
  deleteProductById,
  updateProductById,
} from '../models/productModel.js';

const validationMessage = 'error request validation';

const validateProductRequest = (payload) => {
  const { title, price, stock, description } = payload;

  if (typeof title !== 'string' || title.trim().length < 3 || title.trim().length > 255) {
    return validationMessage;
  }

  if (typeof price !== 'number' || Number.isNaN(price)) {
    return validationMessage;
  }

  if (!Number.isFinite(stock) || !Number.isInteger(stock)) {
    return validationMessage;
  }

  if (description !== undefined && description !== null && typeof description !== 'string') {
    return validationMessage;
  }

  return null;
};

const getProductPayload = (body) => {
  return {
    title: body.title.trim(),
    price: body.price,
    stock: body.stock,
    description: body.description || null,
  };
};

const mapProductError = (error, res) => {
  if (error?.code === 'P1001') {
    return res.status(503).json({
      status: 'network-error',
      message: 'network error',
    });
  }

  if (error?.code === 'P2025') {
    return res.status(400).json({
      status: 'validation-error',
      message: validationMessage,
    });
  }

  return res.status(500).json({
    status: 'internal-error',
    message: 'internal server error',
  });
};

const mapDeleteProductError = (error, res) => {
  if (error?.code === 'P1001') {
    return res.status(503).json({
      status: 'network-error',
      message: 'network error',
    });
  }

  if (error?.code === 'P2025') {
    return res.status(404).json({
      status: 'not-found',
      message: 'product not found',
    });
  }

  return res.status(500).json({
    status: 'internal-error',
    message: 'internal server error',
  });
};

const createProductHandler = async (req, res) => {
  const validationError = validateProductRequest(req.body);

  if (validationError) {
    return res.status(400).json({
      status: 'validation-error',
      message: validationError,
    });
  }

  try {
    const createdProduct = await createProduct(getProductPayload(req.body));

    return res.status(200).json({
      status: 'success',
      message: 'New product successfully added!',
      data: createdProduct,
    });
  } catch (error) {
    return mapProductError(error, res);
  }
};

const updateProductHandler = async (req, res) => {
  const productId = Number(req.params.id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({
      status: 'validation-error',
      message: validationMessage,
    });
  }

  const validationError = validateProductRequest(req.body);

  if (validationError) {
    return res.status(400).json({
      status: 'validation-error',
      message: validationError,
    });
  }

  try {
    const updatedProduct = await updateProductById(productId, getProductPayload(req.body));

    return res.status(200).json({
      status: 'success',
      message: 'New product successfully edited!',
      data: updatedProduct,
    });
  } catch (error) {
    return mapProductError(error, res);
  }
};

const deleteProductHandler = async (req, res) => {
  const productId = Number(req.params.id);

  if (!Number.isInteger(productId) || productId <= 0) {
    return res.status(400).json({
      status: 'validation-error',
      message: 'bad request',
    });
  }

  try {
    await deleteProductById(productId);

    return res.status(200).json({
      status: 'success',
      message: 'Product successfully deleted!',
    });
  } catch (error) {
    return mapDeleteProductError(error, res);
  }
};

export { createProductHandler, updateProductHandler, deleteProductHandler };
