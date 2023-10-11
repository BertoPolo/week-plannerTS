//interfaces
export interface Task {
  id: string
  taskName: string
  startTime: string
  endTime: string
  date: string
  isDone: boolean
  description: string
  dayOfWeek: string
}

export interface InputLabelProps {
  type: "text" | "email" | "password" | "textarea" | "date" | "time" // type of input
  title: string //label
  ph?: string // placeholder
  variable: string // name of the variable what we want to change to create a new task
}
export interface CustomButtonProps {
  launchFunction: Function
  title: string
  classToStyle?: string
}
