"use client" // temporary
import { v4 as uuidv4 } from "uuid"
import Link from "next/link"
import { Textarea } from "@nextui-org/react"
import InputAndLabel from "../../components/InputAndLabel"
import CustomButton from "../../components/CustomButton"
import { createTask, tasks } from "../../functions/functions"

const Home = () => {
  //visual variables
  const wantWekends = false
  const isDescription = false //enables description mode

  // function to modify task ( dynamic day)
  const modifyTask = () => {}
  // use .filter to select the task

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
      {/* separate navbar in other component */}
      <div className="navbar bg-base-100">
        <div className="flex-1">
          <Link href="#home">TO DO lists</Link>
          <Link href="#link">Full calendar</Link>
        </div>
        <div className="flex-none">
          <button className="btn btn-square btn-ghost" onClick={() => !wantWekends}>
            Weekends On/Off
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" className="inline-block w-5 h-5 stroke-current">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M5 12h.01M12 12h.01M19 12h.01M6 12a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0zm7 0a1 1 0 11-2 0 1 1 0 012 0z"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      <div>
        <h1>Weekly Planner</h1>
        <h4>Week nº {getCurrentWeekNumber()}</h4>
      </div>

      {/* Monday */}
      <div className="columns-4">
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Monday - monthDay</h2>
            <div>
              {/* sort by start time */}
              {tasks &&
                tasks.map((task: any) => {
                  return (
                    <div key={task.id}>
                      {task.dayOfWeek === "Mon" && (
                        <div>
                          <p>
                            <b className="pointer" onClick={() => !isDescription}>
                              {task.title}
                            </b>
                          </p>
                          {isDescription && <p>{task.description}</p>}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>

        {/* Tuesday */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Tuesday - monthDay</h2>
            <div>
              {/* sort by start time */}
              {tasks &&
                tasks.map((task: any) => {
                  return (
                    <div key={task.id}>
                      {task.dayOfWeek === "Mon" && (
                        <div>
                          <p>
                            <b className="pointer" onClick={() => !isDescription}>
                              {task.title}
                            </b>
                          </p>
                          {isDescription && <p>{task.description}</p>}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* Wednesday */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Wednesday - monthDay</h2>
            <div>
              {/* sort by start time */}
              {tasks &&
                tasks.map((task: any) => {
                  return (
                    <div key={task.id}>
                      {task.dayOfWeek === "Mon" && (
                        <div>
                          <p>
                            <b className="pointer" onClick={() => !isDescription}>
                              {task.title}
                            </b>
                          </p>
                          {isDescription && <p>{task.description}</p>}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* Thursday */}
        <div className="card w-96 bg-base-100 shadow-xl">
          <div className="card-body">
            <h2 className="card-title">Thursday - monthDay</h2>
            <div>
              {/* sort by start time */}
              {tasks &&
                tasks.map((task: any) => {
                  return (
                    <div key={task.id}>
                      {task.dayOfWeek === "Mon" && (
                        <div>
                          <p>
                            <b className="pointer" onClick={() => !isDescription}>
                              {task.title}
                            </b>
                          </p>
                          {isDescription && <p>{task.description}</p>}
                        </div>
                      )}
                    </div>
                  )
                })}
            </div>
          </div>
        </div>
        {/* add the rest of the days here */}
      </div>

      {/* task creator form */}
      <div className="mt-5">
        <InputAndLabel type="text" title="Task title" variable="taskName" />
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
