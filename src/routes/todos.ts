/*
 * Copyright 2025 Mayeku Khisa
 *
 * Use of this source code is governed by a MIT license as appearing in the
 * LICENSE file included in the root of this source tree.
 */
import express, { Request, Response } from "express"
import { createTodo, deleteTodo, getTodo, getTodos, updateTodo } from "../models/todo"

const router = express.Router()

router.post("/", (req: Request, res: Response) => {
  const { title, note } = req.body
  if (!title) {
    res.status(400).json({ error: "Title is required" })
    return
  }
  const newTodo = createTodo(title, note)
  res.status(201).json({ data: newTodo })
})

router.get("/", (_, res: Response) => {
  res.status(200).json({ data: getTodos() })
})

router.get("/:id", (req: Request, res: Response) => {
  const todo = getTodo(Number(req.params.id))
  if (!todo) {
    res.status(404).json({ error: "Todo not found" })
    return
  }
  res.status(200).json({ data: todo })
})

router.put("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  const { title, note } = req.body
  if (!title && !note) {
    res.status(400).json({ error: "Title or note is required" })
    return
  }

  const updatedTodo = updateTodo(id, { title, note })
  if (!updatedTodo) {
    res.status(404).json({ error: "Todo not found" })
    return
  }

  res.status(200).json({ data: updatedTodo })
})

router.delete("/:id", (req: Request, res: Response) => {
  const id = parseInt(req.params.id)

  if (!deleteTodo(id)) {
    res.status(404).json({ error: "Todo not found" })
    return
  }

  res.status(204).send()
})

export default router
