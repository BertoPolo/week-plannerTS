"use client"
import { v4 as uuidv4 } from "uuid"
import { Task } from "@/types"

export const wantWekends = false

//new task
let taskName = ""
let startTime = ""
let endTime = ""
let date = ""
let description = ""
let dayOfWeek = ""

let newTask = {
  taskName: "",
  startTime: "",
  endTime: "",
  date: "",
  description: "",
  dayOfWeek: "",
}

//all the tasks here
export let tasks: Array<object> = []

export const changeVariableName = (variable: string, value: string) => {
  if (variable === "taskName") newTask.taskName = value
  if (variable === "startTime") newTask.startTime = value
  if (variable === "endTime") newTask.endTime = value
  if (variable === "date") newTask.date = value
  if (variable === "description") newTask.description = value
  if (variable === "dayOfWeek") newTask.dayOfWeek = value
  // else throw new Error("Invalid variable name")

  console.log("changing variable")
  console.log(newTask)
}

export const createTask = () => {
  // create a random ID
  const uniqueId = uuidv4()

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

// const obj: { [key: string]: any } = {}

// const propertyName = "dynamicProperty"
// const propertyValue = "Hello, TypeScript!"

// obj[propertyName] = propertyValue
// console.log(obj)
