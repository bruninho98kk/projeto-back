import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import collectionRouter from "./collectionRoutes.js";
import workoutRouter from "./workoutRoutes.js";
import exerciseRouter from "./exerciseRoutes.js";
import categoryRouter from "./categoryRoutes.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/collections", collectionRouter);

// Rotas protegidas
router.use(authMiddleware);

router.use("/workouts", workoutRouter);
router.use("/exercises", exerciseRouter);
router.use("/categories", categoryRouter);

export default router;
