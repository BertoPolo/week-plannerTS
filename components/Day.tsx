"use client"
import React, { useState } from "react"
import { wantWekends } from "../functions/functionsAndVars"
import { ITask, TaskProps } from "@/types"

const Day = ({ tasks }: TaskProps) => {
  const [isDescription, setIsDescription] = useState(false) //enables description mode
  const weekDays = ["Mon", "Tue", "Wed", "Thu", "Fri"]
  const weekEndDays = ["Sat", "Sun"]

  return (
    <div className="columns-5">
      {/*  */}
      {weekDays.map((weekDay) => {
        return (
          <div className="card w-60 bg-neutral text-neutral-content " key={weekDay}>
            <div className="card-body">
              <h2 className="card-title">{weekDay} - monthDay</h2>
              <div>
                <hr />
                {/* sort by start time */}
                {tasks &&
                  tasks.map((task: ITask) => {
                    // console.log(task)
                    return (
                      <div key={task.id}>
                        {task.dayOfWeek === "Mon" && (
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
  )
}

export default Day
