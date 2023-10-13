import { ITask } from "./types"

const baseURL = "http://localhost:3001"

export const getAllTasks = async (): Promise<ITask[]> => {
  const res = await fetch(`${baseURL}/tasks`)
  const tasks = res.json()
  console.log(await tasks)
  return tasks
}
