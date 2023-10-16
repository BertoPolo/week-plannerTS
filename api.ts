import { FormEventHandler } from "react"
import { ITask } from "./types"

const baseURL = "http://localhost:3001/"

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURL}tasks`)
  const tasks = await res.json()
  return tasks
}

export const createTask = async (task: ITask): Promise<ITask> => {
  const res = await fetch(`${baseURL}/task`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify(task),
  })
  const newTask = await res.json()
  return newTask
}
