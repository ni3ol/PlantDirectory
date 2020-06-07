import express, { Request, Response } from "express";
import { plants } from "./plants";
import path from 'path'
import cors from "cors";

const app = express();
const port = 3000;

app.use(cors());
app.use("/public", express.static(path.join(__dirname, "public")));

app.get("/", (req: Request, res: Response) => res.send(plants));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
