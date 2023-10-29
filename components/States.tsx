import { State, Action } from "@/types"

export const initialState = {
  isEditTaskModalOpen: false,
  newTaskNameValue: "",
  newStartTimeValue: "",
  newEndTimeValue: "",
  newDescriptionValue: "",
  newDayOfWeekValue: "Monday",
}

export const reducer = (state: any, action: any) => {
  switch (action.type) {
    case "openEditModal":
      return { ...state, isEditTaskModalOpen: true }
    case "closeEditModal":
      return { ...state, isEditTaskModalOpen: false }
    case "updateTaskName":
      return { ...state, newTaskNameValue: action.payload }
    case "updateStartTime":
      return { ...state, newStartTimeValue: action.payload }
    case "updateEndTime":
      return { ...state, newEndTimeValue: action.payload }
    case "updateDescription":
      return { ...state, newDescriptionValue: action.payload }
    case "updateDayOfWeek":
      return { ...state, newDayOfWeekValue: action.payload }
    case "reset":
      return initialState
    default:
      return state
  }
}

export const daysOfWeek = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
