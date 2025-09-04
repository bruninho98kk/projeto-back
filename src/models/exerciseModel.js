const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();

module.exports = {
  async createExercise(data) {
    return prisma.exercise.create({ data });
  },
  async getAllExercises() {
    return prisma.exercise.findMany({ include: { category: true } });
  },
  async getExerciseById(id) {
    return prisma.exercise.findUnique({ where: { id }, include: { category: true } });
  },
  async updateExercise(id, data) {
    return prisma.exercise.update({ where: { id }, data });
  },
  async deleteExercise(id) {
    return prisma.exercise.delete({ where: { id } });
  },
};
