import express from "express";
import categoryController from "../controllers/categoryController.js";

const router = express.Router();

router.post('/', categoryController.create);
router.get('/', categoryController.list);
router.get('/:id', categoryController.get);
router.put('/:id', categoryController.update);
router.delete('/:id', categoryController.remove);

export default router;
