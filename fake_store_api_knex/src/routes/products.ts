import { Router } from "express";
import { categories, category } from "./categories";
import productsController from "../controllers/productsController";

const router: Router = Router();

router.use("/categories", categories);
router.use("/category", category);

router.get("/", productsController.index);
router.get("/:id", productsController.show);
router.post("/", productsController.insert);
router.put("/:id", productsController.update);
router.delete("/:id", productsController.remove);

export { router };
