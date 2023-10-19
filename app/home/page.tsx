// import Link from "next/link"
import DayInWeek from "../../components/DayInWeek"
// import Modal from "../../components/ModalForm"
import { getAllTasks } from "@/api"
import AddTask from "@/components/AddTask"

const Home = async () => {
  const tasks = await getAllTasks()

  // function getCurrentWeekNumber() {
  //   /* the week is +1( have to be fixed, this is just to know the current week, but has to be navigable to other weeks) */
  //   const today: any = new Date()
  //   const yearStart: any = new Date(today.getFullYear(), 0, 1)
  //   const dayOfWeek = today.getDay()

  //   // Calculate the week number
  //   const weekNumber = Math.ceil(((today - yearStart) / 86400000 + 1 + (dayOfWeek - 1)) / 7)
  //   return weekNumber
  // }

  return (
    <div className="mx-6">
      <div>
        <h1 className="text-xl">Weekly Planner</h1>
        {/* <h4>Week nº {getCurrentWeekNumber()}</h4> */}
      </div>
      {/* <Modal /> */}
      <AddTask />
      <DayInWeek tasks={tasks} />
    </div>
  )
}
export default Home
