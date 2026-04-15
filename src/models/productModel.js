import prisma from '../config/prismaClient.js';

const createProduct = async (payload) => {
  return prisma.product.create({
    data: payload,
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

export { createProduct, updateProductById, deleteProductById };
