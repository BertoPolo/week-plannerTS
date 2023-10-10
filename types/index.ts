//interfaces
export interface Task {
  id: string
  title: string
  startTime: string
  endTime: string
  date: string
  isDone: boolean
  description: string
  dayOfWeek: string
}

export interface InputLabelProps {
  type: "text" | "email" | "password" | "textarea"
  variableNameToUpdate: string
  title: string
  ph?: string
}
export interface CustomButtonProps {
  launchFunction: Function
  title: string
  classToStyle?: string
}
