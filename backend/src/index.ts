import express, { Request, Response } from 'express'
import { plants } from './plants'

const app = express()
const port = 3000

app.get('/', (req: Request, res: Response) => res.send(plants))

app.listen(port, () => console.log(`Example app listening at http://localhost:${port}`))