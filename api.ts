import { ITask } from "./types"

const baseURL = "http://localhost:3001/"

export const getTasks = async (filter?: string): Promise<ITask[]> => {
  try {
    const res = await fetch(`${baseURL}tasks`, { cache: "no-store" }) // super important this " cache = "no-store", or your data will not be dynamic and will not change!
    if (res.ok) {
      const tasks = await res.json()
      if (filter) return tasks.filter((task: ITask) => task.dayOfWeek === filter) //add a sorting by start time
      else return tasks
    }
  } catch (error) {
    console.log(error)
  }
  throw new Error("data fetching not working properly")
}

export const createTask = async (task: ITask): Promise<ITask> => {
  try {
    const res = await fetch(`${baseURL}tasks`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(task),
    })
    if (res.ok) {
      const newTask = await res.json()
      return newTask
    }
  } catch (error) {
    console.log(error)
  }
  throw new Error("Posting new data not working properly")
}

//not yet in use
export const modifyTask = async (task: ITask): Promise<ITask> => {
  try {
    const res = await fetch(`${baseURL}tasks/${task.id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(task),
    })
    if (res.ok) {
      const updatedTask = await res.json()
      return updatedTask
    }
  } catch (error) {
    console.log(error)
  }
  throw new Error("Modify task failed")
}

//not yet in use nor ready
export const deleteTask = async (id: string): Promise<void> => {
  try {
    await fetch(`${baseURL}tasks/${id}`, {
      method: "DELETE",
    })
    return
  } catch (error) {
    console.log(error)
  }
  throw new Error("Delete task failed")
}
