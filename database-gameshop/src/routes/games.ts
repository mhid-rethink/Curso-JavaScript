import { Router } from "express";
import gamesController from "../controllers/gamesController";

const router: Router = Router();

router.get("/", gamesController.index);
router.get("/:id", gamesController.show);
router.post("/", gamesController.insert);
export { router };
