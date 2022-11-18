import express from "express";
import * as controllers from "../controllers";

const router = express.Router();

router.post("/", controllers.create);
router.get("/", controllers.getAll);
router.put("/:id", controllers.update);
router.delete("/:id", controllers.deleteById);
router.post("/many", controllers.createMany);
router.get("/:id", controllers.getById);
router.get("/example/:test", controllers.search);

export { router as QuotesRoutes };
