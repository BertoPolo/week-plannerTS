// import Link from "next/link"
import Day from "../../components/Day"
import Modal from "../../components/Modal"
import { getAllTasks } from "@/api"

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
    <>
      <div>
        <h1 className="text-xl">Weekly Planner</h1>
        {/* <h4>Week nº {getCurrentWeekNumber()}</h4> */}
      </div>
      <Modal />
      <Day tasks={tasks} />
    </>
  )
}
export default Home
