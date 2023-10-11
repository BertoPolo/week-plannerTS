"use client"
import { v4 as uuidv4 } from "uuid"
import { Task } from "@/types"

let test = ""
let test2 = ""

export const testFunction = (arg1: string) => {
  test = arg1
  console.log("create taks " + test)
}

export const createTask = ({ title, startTime, endTime, date, isDone, description, dayOfWeek }: Task) => {
  // create a random ID
  const uniqueId = uuidv4()

  let tasks: Array<object> = []

  tasks = [
    ...tasks,
    {
      id: uniqueId,
      title: title,
      startTime: startTime,
      endTime: endTime,
      date: date,
      isDone: false,
      description: description,
      dayOfWeek: "Mon",
    },
  ]
}
