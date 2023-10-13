import Link from "next/link"
// import { Textarea } from "@nextui-org/react"
import InputAndLabel from "../../components/InputAndLabel"
import CustomButton from "../../components/CustomButton"
import Day from "../../components/Day"
import { createTask, wantWekends } from "../../functions/functionsAndVars"
import { getAllTasks } from "@/api"

const Home = async () => {
  const tasks = await getAllTasks()
  console.log(tasks)
  // use .filter to select the task
  {
    /* the week is +1( have to be fixed, this is just to know the current week, but has to be navigable to other weeks) */
  }
  function getCurrentWeekNumber() {
    const today: any = new Date()
    const yearStart: any = new Date(today.getFullYear(), 0, 1)
    const dayOfWeek = today.getDay()

    // Calculate the week number
    const weekNumber = Math.ceil(((today - yearStart) / 86400000 + 1 + (dayOfWeek - 1)) / 7)
    return weekNumber
  }

  return (
    <>
      <div>
        <h1 className="">Weekly Planner</h1>
        <h4>Week nº {getCurrentWeekNumber()}</h4>
      </div>
      <Day />
      {/* task creator form */}
      <div className="mt-3 grid justify-items-center">
        <InputAndLabel type="text" title="Task title" variable="taskName" ph="enter task here" />
        <InputAndLabel type="date" title="Date" variable="date" />
        <InputAndLabel type="time" title="Start Time" variable="startTime" />
        <InputAndLabel type="time" title="End Time" variable="endTime" />
        <InputAndLabel type="textarea" title="Description" variable="description" />

        <CustomButton launchFunction={createTask} title="Create Task" />
      </div>
    </>
  )
}
export default Home
