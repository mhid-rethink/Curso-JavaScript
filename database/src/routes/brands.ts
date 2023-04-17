import { Router } from "express";
import brandsController from "../controllers/brandsController";

const router: Router = Router();
router.get("/", brandsController.index);
router.get("/:id", brandsController.show);
router.post("/", brandsController.insert);
router.put("/:id", brandsController.update);
router.delete("/:id", brandsController.remove);

export { router };
