import express from "express";

// Importar todas as rotas
import authRouter from "./auth.routes.js";
import animesRouter from "./animeRoutes.js";
import personagensRouter from "./personagemRoutes.js";
import collectionRouter from "./collectionRoutes.js";
import cardRouter from "./cardRoutes.js";
import workoutRouter from "./workoutRoutes.js";
import exerciseRouter from "./exerciseRoutes.js";
import categoryRouter from "./categoryRoutes.js";

import authMiddleware from "../middleware/authMiddleware.js";

const router = express.Router();

// Rotas públicas
router.use("/auth", authRouter);
router.use("/collections", collectionRouter);
router.use("/cards", cardRouter);

// Rotas protegidas
router.use(authMiddleware);

router.use("/animes", animesRouter);
router.use("/personagens", personagensRouter);
router.use("/workouts", workoutRouter);
router.use("/exercises", exerciseRouter);
router.use("/categories", categoryRouter);

export default router;
