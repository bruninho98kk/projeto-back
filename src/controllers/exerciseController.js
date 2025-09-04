import exerciseModel from "../models/exerciseModel.js";

const exerciseController = {
  async create(req, res) {
    try {
      const exercise = await exerciseModel.createExercise(req.body);
      res.status(201).json(exercise);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async list(req, res) {
    try {
      const exercises = await exerciseModel.getAllExercises();
      res.json(exercises);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async get(req, res) {
    try {
      const exercise = await exerciseModel.getExerciseById(Number(req.params.id));
      if (!exercise) return res.status(404).json({ error: 'Exercício não encontrado' });
      res.json(exercise);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const exercise = await exerciseModel.updateExercise(Number(req.params.id), req.body);
      res.json(exercise);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async remove(req, res) {
    try {
      await exerciseModel.deleteExercise(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};

export default exerciseController;
