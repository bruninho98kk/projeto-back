import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const categoryModel = {
  async createCategory(data) {
    return prisma.category.create({ data });
  },
  async getAllCategories() {
    return prisma.category.findMany({ include: { exercises: true } });
  },
  async getCategoryById(id) {
    return prisma.category.findUnique({ where: { id }, include: { exercises: true } });
  },
  async updateCategory(id, data) {
    return prisma.category.update({ where: { id }, data });
  },
  async deleteCategory(id) {
    return prisma.category.delete({ where: { id } });
  },
};

export default categoryModel;
