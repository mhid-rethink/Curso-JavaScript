import express, { Response, Request } from "express";
import { router } from "./routes";

const app = express();
const port = 3000;

app.use(express.json());

app.get("/", (req: Request, res: Response) => {
  res.send("api v1 is running");
});

app.use("/api/v1", router);

app.listen(port, () => {
  console.log(`Listening on port ${port}`);
});
