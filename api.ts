import { Task } from "./types"

const baseURL = "http://localhost:3001"

export const getAllTasks = async (): Promise<Task> => {
  const res = await fetch(`${baseURL}/tasks`)
  const tasks = res.json()
  return tasks
}
