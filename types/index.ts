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

export interface inputLabelProps {
  type: string
  onChangeFunction: Function
  title: string
  variable: string
  ph?: string
}
export interface CustomButtonProps {
  launchFunction: Function
  title: string
  style: string
}
