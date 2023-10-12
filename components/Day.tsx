"use client"
import React from "react"
import { tasks } from "../functions/functions"
import { useState } from "react"

const Day = () => {
  const [isDescription, setIsDescription] = useState(false) //enables description mode
  return (
    <div className="columns-4">
      <div className="card w-96 bg-base-100 shadow-xl">
        <div className="card-body">
          <h2 className="card-title">weekDay - monthDay</h2>
          <div>
            {/* sort by start time */}
            {tasks &&
              tasks.map((task: any) => {
                return (
                  <div key={task.id}>
                    {task.dayOfWeek === "Mon" && (
                      <div>
                        <p>
                          <b className="pointer" onClick={() => setIsDescription(!isDescription)}>
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

      {/* rest of days */}
    </div>
  )
}

export default Day
