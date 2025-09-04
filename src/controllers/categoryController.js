const categoryModel = require('../models/categoryModel');

module.exports = {
  async create(req, res) {
    try {
      const category = await categoryModel.createCategory(req.body);
      res.status(201).json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async list(req, res) {
    try {
      const categories = await categoryModel.getAllCategories();
      res.json(categories);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async get(req, res) {
    try {
      const category = await categoryModel.getCategoryById(Number(req.params.id));
      if (!category) return res.status(404).json({ error: 'Categoria não encontrada' });
      res.json(category);
    } catch (err) {
      res.status(500).json({ error: err.message });
    }
  },
  async update(req, res) {
    try {
      const category = await categoryModel.updateCategory(Number(req.params.id), req.body);
      res.json(category);
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
  async remove(req, res) {
    try {
      await categoryModel.deleteCategory(Number(req.params.id));
      res.status(204).end();
    } catch (err) {
      res.status(400).json({ error: err.message });
    }
  },
};
