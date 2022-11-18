import express from "express";
import * as controllers from "../controllers";

const router = express.Router();

router.post("/", controllers.create);
router.get("/", controllers.getAll);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.deleteById);
router.post("/many", controllers.createMany);

export { router as QuotesRoutes };
