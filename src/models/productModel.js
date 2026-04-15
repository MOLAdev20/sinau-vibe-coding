import prisma from '../config/prismaClient.js';

const createProduct = async (payload) => {
  return prisma.product.create({
    data: payload,
  });
};

const findAllProducts = async () => {
  return prisma.product.findMany({
    orderBy: { id: 'desc' },
  });
};

const findProductById = async (id) => {
  return prisma.product.findUnique({
    where: { id },
  });
};

const updateProductById = async (id, payload) => {
  return prisma.product.update({
    where: { id },
    data: payload,
  });
};

const deleteProductById = async (id) => {
  return prisma.product.delete({
    where: { id },
  });
};

export {
  createProduct,
  findAllProducts,
  findProductById,
  updateProductById,
  deleteProductById,
};
