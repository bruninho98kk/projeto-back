import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

const workoutModel = {
  async createWorkout(data) {
    return prisma.workout.create({ data });
  },
  async getAllWorkouts() {
    return prisma.workout.findMany({ include: { exercises: true } });
  },
  async getWorkoutById(id) {
    return prisma.workout.findUnique({ where: { id }, include: { exercises: true } });
  },
  async updateWorkout(id, data) {
    return prisma.workout.update({ where: { id }, data });
  },
  async deleteWorkout(id) {
    return prisma.workout.delete({ where: { id } });
  },
};

export default workoutModel;
