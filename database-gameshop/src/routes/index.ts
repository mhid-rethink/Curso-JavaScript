import { router as gamesRoutes } from "./games";
import { Router } from "express";

const router: Router = Router();

router.use("/games", gamesRoutes);

export { router };
