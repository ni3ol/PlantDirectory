import express, { Request, Response } from "express";
import { plants } from "./plants";
import cors from 'cors' 

const app = express();
const port = 3000;

app.use(cors())

app.get("/", (req: Request, res: Response) => res.send(plants));

app.listen(port, () =>
  console.log(`Example app listening at http://localhost:${port}`)
);
