"use client"
import React, { useState } from "react"
import { ITask, TaskProps } from "@/types"

const Day = ({ tasks }: TaskProps) => {
  const [isDescription, setIsDescription] = useState<boolean>(false) //enables description mode
  const weekDays = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"]
  const weekEndDays = ["Saturday", "Sunday"]

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
                    return (
                      <div key={task.id}>
                        {/* {task.date === "date1" && ( */}
                        <div>
                          <p>
                            <b className="pointer" onClick={() => setIsDescription(!isDescription)}>
                              {task.taskName}
                            </b>
                          </p>
                          {isDescription && <p>{task.description}</p>}
                        </div>
                        {/* )} */}
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
