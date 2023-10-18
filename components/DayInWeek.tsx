"use client"
import React, { useState } from "react"
import { ITask, TaskProps } from "@/types"
import { FiEdit } from "react-icons/fi"
import { ImBin } from "react-icons/im"

const Day = ({ tasks }: TaskProps) => {
  const [isDescription, setIsDescription] = useState<boolean>(false) //enables description mode
  const [wantWeekends, setWantWeekends] = useState<boolean>(false)
  const [selectedTask, setSelectedTask] = useState<string>("")

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
      <button className="btn btn-outline btn-xs mb-2 " onClick={() => setWantWeekends(!wantWeekends)}>
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

                  {tasks &&
                    tasks.map((task: ITask) => {
                      return (
                        <div key={task.id}>
                          {task.dayOfWeek === weekDay && (
                            <div>
                              <p className="flex">
                                <b
                                  className="cursor-pointer"
                                  onClick={() => {
                                    setIsDescription(!isDescription), setSelectedTask(task.id)
                                  }}
                                >
                                  {task.taskName}
                                </b>
                                <span className="flex">
                                  <FiEdit size={15} className="cursor-pointer text-blue-400 mx-3" />
                                  <ImBin size={15} className="cursor-pointer text-red-600" />
                                </span>
                              </p>

                              {isDescription && <small>{task.id === selectedTask && task.description}</small>}
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
