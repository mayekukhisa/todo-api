/*
 * Copyright 2025 Mayeku Khisa
 *
 * Use of this source code is governed by a MIT license as appearing in the
 * LICENSE file included in the root of this source tree.
 */
import dotenv from "dotenv"
import express, { Response } from "express"
import todosRouter from "./routes/todos"

dotenv.config()

const app = express()
const port = process.env.PORT || 3000

app.use(express.json())

app.get("/", (_, res: Response) => {
  const docs = [
    "To-Do List REST API",
    "",
    "Available endpoints:",
    "",
    "POST /v1/todos - Create a new todo",
    "GET /v1/todos - List all todos",
    "GET /v1/todos/:id - Get a specific todo",
    "PUT /v1/todos/:id - Update a todo",
    "DELETE /v1/todos/:id - Delete a todo",
  ].join("\n")
  res.send(docs)
})

app.use("/v1/todos", todosRouter)

app.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`)
})
