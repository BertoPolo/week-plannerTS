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

export interface ButtonProps {
  type: string
  onChangeFunction: string
  title: string
  variable: string
  ph?: string
}
export interface CustomButtonProps {
  launchFunction: string
  title: string
  style: string
  type: string
}
