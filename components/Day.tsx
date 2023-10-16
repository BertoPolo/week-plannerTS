"use client"
import React, { useState } from "react"
import { ITask, TaskProps } from "@/types"

const Day = ({ tasks }: TaskProps) => {
  const [isDescription, setIsDescription] = useState<boolean>(false) //enables description mode
  const [wantWeekends, setWantWeekends] = useState<boolean>(false)
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const weekEndDays = ["Saturday", "Sunday"]

  return (
    <>
      <button className="btn btn-outline btn-xs mb-2 " onClick={() => setWantWeekends(!wantWeekends)}>
        Weekends On/Off
      </button>

      <div className={wantWeekends ? "columns-7" : "columns-5"}>
        {/*  */}
        {weekDays.map((weekDay) => {
          return (
            <div className="card w-60 bg-neutral text-neutral-content " key={weekDay}>
              <div className="card-body">
                <h2 className="card-title">{weekDay} </h2>
                <div>
                  <hr />
                  {/* sort by start time */}
                  {tasks &&
                    tasks.map((task: ITask) => {
                      return (
                        <div key={task.id}>
                          {task.dayOfWeek === weekDay && (
                            <div>
                              <p>
                                <b className="pointer" onClick={() => setIsDescription(!isDescription)}>
                                  {task.taskName}
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
          )
        })}
      </div>
    </>
  )
}

export default Day
