const express = require('express');
const router = express.Router();
const workoutController = require('../controllers/workoutController');

router.post('/', workoutController.create);
router.get('/', workoutController.list);
router.get('/:id', workoutController.get);
router.put('/:id', workoutController.update);
router.delete('/:id', workoutController.remove);

module.exports = router;
