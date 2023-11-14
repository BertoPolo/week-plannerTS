//interfaces
export interface ITask {
  id: string
  taskName: string
  startTime: string
  endTime: string
  // date: string
  isDone: boolean
  description: string
  dayOfWeek: "Monday" | "Tuesday" | "Wednesday" | "Thursday" | "Friday" | "Saturday" | "Sunday"
}

export interface TaskProps {
  tasks: Array<ITask>
  weekDay?: string
}

export interface State {
  // isEditTaskModalOpen: boolean
  // isAddTaskModalOpen: boolean
  newTaskNameValue: string
  newStartTimeValue: string
  newEndTimeValue: string
  newDescriptionValue: string
  newDayOfWeekValue: ITask["dayOfWeek"]
}

export type Action =
  // | { type: "openEditModal" }
  // | { type: "closeEditModal" }
  // | { type: "openAddTaskModal" }
  // | { type: "closeAddTaskModal" }
  | { type: "updateTaskName"; payload: string }
  | { type: "updateStartTime"; payload: string }
  | { type: "updateEndTime"; payload: string }
  | { type: "updateDescription"; payload: string }
  | { type: "updateDayOfWeek"; payload: string }
  //| { type: "updateDayOfWeek"; payload: ITask["dayOfWeek"]}
  | { type: "reset" }

// not used with server approach
// export interface InputLabelProps {
//   type: "text" | "email" | "password" | "textarea" | "date" | "time" // type of input
//   title: string //label
//   ph?: string // placeholder
//   variable: string // name of the variable what we want to change when create/modify a task
// }
// export interface CustomButtonProps {
//   launchFunction: Function
//   title: string
//   classToStyle?: string
// }
