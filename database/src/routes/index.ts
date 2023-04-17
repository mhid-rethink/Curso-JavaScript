import { router as booksRoutes } from "./books";
import { router as authorsRoutes } from "./authors";
import { router as brandsRoutes } from "./brands";
import { router as carsRouters } from "./cars";
import { Router } from "express";

const router: Router = Router();

router.use("/books", booksRoutes);
router.use("/authors", authorsRoutes);
router.use("/brands", brandsRoutes);
router.use("/cars", carsRouters);

export { router };
