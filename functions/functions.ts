"use client"
import { v4 as uuidv4 } from "uuid"
import { Task } from "@/types"

let taskName = ""
let startTime = ""
let endTime = ""
let date = ""
let description = ""
let dayOfWeek = ""

export const changeVariableName = (variable: any, value: string) => {
  taskName = value
  console.log("changing variable")
}

export const createTask = () => {
  // create a random ID
  const uniqueId = uuidv4()

  let tasks: Array<object> = []

  tasks = [
    ...tasks,
    {
      id: uniqueId,
      taskName: taskName,
      startTime: startTime,
      endTime: endTime,
      date: date,
      isDone: false,
      description: description,
      dayOfWeek: "Mon",
    },
  ]
  console.log(tasks)
}
