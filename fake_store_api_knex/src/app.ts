import express, { Request, Response } from "express";
import { router } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("Fake store API prototype");
});

app.use("/", router);

app.listen(port, () => {
  console.log(`Listening on port: ${port}`);
});
