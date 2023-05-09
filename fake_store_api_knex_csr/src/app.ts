import { errorHandler } from "./middlewares/errorHandler";
import express, { Request, Response } from "express";
import { router } from "./routes";
import * as dotenv from "dotenv";
dotenv.config();

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Fake store API for your e-commerce or shopping website prototype");
});

app.use("/", router);

app.use(errorHandler);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
