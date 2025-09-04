import express from "express";
import workoutController from "../controllers/workoutController.js";

const router = express.Router();

router.post('/', workoutController.create);
router.get('/', workoutController.list);
router.get('/:id', workoutController.get);
router.put('/:id', workoutController.update);
router.delete('/:id', workoutController.remove);

export default router;
