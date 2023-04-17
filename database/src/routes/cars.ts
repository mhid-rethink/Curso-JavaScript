import { Router } from "express";
import carsController from "../controllers/carsController";

const router: Router = Router();
router.get("/", carsController.index);
router.get("/:id", carsController.show);
router.post("/", carsController.insert);
router.put("/:id", carsController.update);
router.delete("/:id", carsController.remove);

export { router };
