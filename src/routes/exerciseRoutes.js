const express = require('express');
const router = express.Router();
const exerciseController = require('../controllers/exerciseController');

router.post('/', exerciseController.create);
router.get('/', exerciseController.list);
router.get('/:id', exerciseController.get);
router.put('/:id', exerciseController.update);
router.delete('/:id', exerciseController.remove);

module.exports = router;
