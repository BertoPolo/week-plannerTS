import { ITask } from "./types"

const baseURL = "http://localhost:3001/"

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURL}tasks`)
  const tasks = await res.json()
  console.log(tasks)
  return tasks
}
