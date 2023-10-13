//interfaces
export interface ITask {
  id: string
  taskName: string
  startTime: string
  endTime: string
  date: string
  isDone: boolean
  description: string
  dayOfWeek: "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
}

export interface TaskProps {
  tasks: Array<ITask>
}

export interface InputLabelProps {
  type: "text" | "email" | "password" | "textarea" | "date" | "time" // type of input
  title: string //label
  ph?: string // placeholder
  variable: string // name of the variable what we want to change when create/modify a task
}
export interface CustomButtonProps {
  launchFunction: Function
  title: string
  classToStyle?: string
}
