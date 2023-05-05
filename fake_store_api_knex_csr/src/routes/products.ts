import { Router } from "express";
import { categories, category } from "./categories";
import productsController from "../controllers/productsController";
import middleware from "../middlewares/dataValidator";

const router: Router = Router();

router.use("/categories", categories);
router.use("/category", category);

router.get("/", productsController.index);
router.get("/:id", middleware.productPathValidator, productsController.show);
router.post("/", middleware.productDataValidator, productsController.insert);
router.put("/:id", middleware.productPathValidator, productsController.update);
router.delete(
  "/:id",
  middleware.productPathValidator,
  productsController.remove
);

export { router };
