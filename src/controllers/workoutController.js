const workoutModel = require('../models/workoutModel');

module.exports = {
  async create(req, res) {
    try {
      const workout = await workoutModel.createWorkout(req.body);
      res.status(201).json(workout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async list(req, res) {
    try {
      const workouts = await workoutModel.getAllWorkouts();
      res.json(workouts);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async get(req, res) {
    try {
      const workout = await workoutModel.getWorkoutById(Number(req.params.id));
      if (!workout) return res.status(404).json({ error: 'Treino não encontrado' });
      res.json(workout);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const workout = await workoutModel.updateWorkout(Number(req.params.id), req.body);
      res.json(workout);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async remove(req, res) {
    try {
      await workoutModel.deleteWorkout(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
