/*
 * Copyright 2025 Mayeku Khisa
 *
 * Use of this source code is governed by a MIT license as appearing in the
 * LICENSE file included in the root of this source tree.
 */
export interface Todo {
  id: number
  title: string
  note?: string
  completed: boolean
  createdAt: Date
  updatedAt?: Date
}

let todos: Todo[] = []
let currentId = 1

export function createTodo(title: string, note?: string) {
  const newTodo = { id: currentId++, title, note, completed: false, createdAt: new Date() } satisfies Todo
  todos.push(newTodo)
  return newTodo
}

export function getTodos() {
  return todos
}

export function getTodo(id: number) {
  return todos.find((todo) => todo.id === id) || null
}

export function updateTodo(id: number, updatedData: Partial<Todo>) {
  const todoIndex = todos.findIndex((todo) => todo.id === id)
  if (todoIndex === -1) return null

  const updatedTodo = { ...todos[todoIndex], ...updatedData, updatedAt: new Date() } satisfies Todo
  todos[todoIndex] = updatedTodo
  return updatedTodo
}

export function deleteTodo(id: number) {
  const todoIndex = todos.findIndex((todo) => todo.id === id)
  if (todoIndex === -1) return false

  todos.splice(todoIndex, 1)
  return true
}
