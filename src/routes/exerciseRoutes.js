import express from "express";
import exerciseController from "../controllers/exerciseController.js";

const router = express.Router();

router.post('/', exerciseController.create);
router.get('/', exerciseController.list);
router.get('/:id', exerciseController.get);
router.put('/:id', exerciseController.update);
router.delete('/:id', exerciseController.remove);

export default router;
