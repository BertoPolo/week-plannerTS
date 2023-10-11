"use client" // temporary
import { v4 as uuidv4 } from "uuid"
import Link from "next/link"
import { Textarea } from "@nextui-org/react"
import InputAndLabel from "../../components/InputAndLabel"
import CustomButton from "../../components/CustomButton"

const Home = () => {
  //visual variables
  const wantWekends = false
  const isDescription = false //enable description mode

  let tasks: Array<object> = []

  //create task
  const createTask = () => {
    // create a random ID
    const uniqueId = uuidv4()

    tasks = [
      ...tasks,
      {
        id: uniqueId,
        title: title,
        startTime: startTime,
        endTime: endTime,
        date: date,
        isDone: false,
        description: description,
        dayOfWeek: "Mon",
      },
    ]
  }

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
      <div className="columns-auto">
        <div className="card w-96 bg-base-100 shadow-xl">
          <figure>
            <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
          </figure>
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
      </div>

      {/* Tuesday */}
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
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
        <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
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
        <figure>
          <img src="/images/stock/photo-1606107557195-0e29a4b5b4aa.jpg" alt="Shoes" />
        </figure>
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

      {/* task creator form */}
      <div className="mt-5">
        <InputAndLabel type="text" title="Task title" />

        {/*
        <input type="text" placeholder="Task title" onChange={(e) => (title = e.target.value)} />

        <label>Date</label>
        <input type="date" name="" id="" value={date} onChange={(e) => (date = e.target.value)} />

        <label>Start time</label>
        <input type="time" name="" id="" value={startTime} onChange={(e) => (startTime = e.target.value)} />

        <label>Finish time</label>
        <input type="time" name="" id="" value={endTime} onChange={(e) => (endTime = e.target.value)} />

        <label>Description</label>
        <Textarea minRows={2} placeholder="text area" value={description} onChange={(e) => (description = e.target.value)} /> */}

        <CustomButton launchFunction={() => createTask()} title="Create Task" />
      </div>
    </>
  )
}
export default Home
