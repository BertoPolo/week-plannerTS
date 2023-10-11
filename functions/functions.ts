"use client"
import { v4 as uuidv4 } from "uuid"
import { Task } from "@/types"

//new task
let taskName = ""
let startTime = ""
let endTime = ""
let date = ""
let description = ""
let dayOfWeek = ""

//all the tasks here
export let tasks: Array<object> = []

export const changeVariableName = (variable: string, value: string) => {
  if (variable === "taskName") taskName = value
  if (variable === "startTime") startTime = value
  if (variable === "endTime") endTime = value
  if (variable === "date") date = value
  if (variable === "description") description = value
  if (variable === "dayOfWeek") dayOfWeek = value
  // else throw new Error("Invalid variable name")

  console.log("changing variable")
  //   console.log(value)
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
