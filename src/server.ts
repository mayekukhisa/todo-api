/*
 * Copyright 2025 Mayeku Khisa
 *
 * Use of this source code is governed by a MIT license as appearing in the
 * LICENSE file included in the root of this source tree.
 */
import dotenv from "dotenv"
import express, { Response } from "express"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get("/", (_, res: Response) => {
  res.send("To-Do List REST API")
})

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
