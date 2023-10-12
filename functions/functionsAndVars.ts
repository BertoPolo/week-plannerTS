"use client"
import { v4 as uuidv4 } from "uuid"
import { Task } from "@/types"

export const wantWekends = false
export const darkMode = false

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

// function to modify task ( dynamic day)
export const modifyTask = () => {}

export const changeInputValue = (variable: string, value: string) => {
  // console.log(variable, value)
  if (variable === "Task title") newTask.taskName = value
  if (variable === "Start Time") newTask.startTime = value
  if (variable === "End Time") newTask.endTime = value
  if (variable === "Date") newTask.date = value
  if (variable === "Description") newTask.description = value
  if (variable === "DayOfWeek") newTask.dayOfWeek = value //get it with getDay
  // else throw new Error("Invalid variable name")
}

export const createTask = () => {
  // create a random ID
  const uniqueId = uuidv4()

  tasks = [
    ...tasks,
    {
      id: uniqueId,
      taskName: newTask.taskName,
      startTime: newTask.startTime,
      endTime: newTask.endTime,
      date: newTask.date,
      isDone: false,
      description: newTask.description,
      dayOfWeek: "Mon",
    },
  ]
  // console.log(tasks)
}

// const obj: { [key: string]: any } = {}

// const propertyName = "dynamicProperty"
// const propertyValue = "Hello, TypeScript!"

// obj[propertyName] = propertyValue
// console.log(obj)
