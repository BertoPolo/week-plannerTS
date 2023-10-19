"use client"
import React, { useState } from "react"
import { ITask, TaskProps } from "@/types"
import Task from "./Task"

const DayInWeek = ({ tasks }: TaskProps) => {
  const [isDescription, setIsDescription] = useState<boolean>(false) //enables description mode
  const [wantWeekends, setWantWeekends] = useState<boolean>(false)

  let displayDays = wantWeekends
    ? ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]
    : ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]

  tasks.sort((a, b) => {
    if (a.startTime < b.startTime) {
      return -1
    }
    if (a.startTime > b.startTime) {
      return 1
    }
    return 0
  })

  return (
    <>
      <button className="btn btn-outline btn-xs mb-2 block" onClick={() => setWantWeekends(!wantWeekends)}>
        Weekends On/Off
      </button>

      <div className={wantWeekends ? "columns-7" : "columns-5"}>
        {/*  */}
        {displayDays.map((weekDay) => {
          return (
            <div className="card sm:w-auto bg-neutral text-neutral-content h-screen" key={weekDay}>
              <div className="card-body ">
                <h2 className="card-title cursor-pointer">{weekDay} </h2>
                <div>
                  <hr />
                  <Task tasks={tasks} weekDay={weekDay} />
                </div>
              </div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default DayInWeek
