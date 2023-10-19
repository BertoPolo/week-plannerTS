"use client"
import { v4 as uuidv4 } from "uuid"
import React, { FormEventHandler, useState } from "react"
import { createTask, modifyTask } from "@/api"
import { useRouter } from "next/navigation"
import { TaskProps, ITask } from "@/types"
import { FiEdit } from "react-icons/fi"
import { ImBin } from "react-icons/im"

const Task = ({ tasks, weekDay }: TaskProps) => {
  //
  const [isDescription, setIsDescription] = useState<boolean>(false) //enables description mode
  const [selectedTask, setSelectedTask] = useState<string>("")

  const [newTaskNameValue, setNewTaskNameValue] = useState<string>("")
  // const [newDateValue, setNewDateValue] = useState<string>("")
  const [newStartTimeValue, setNewStartTimeValue] = useState<string>("")
  const [newEndTimeValue, setNewEndTimeValue] = useState<string>("")
  const [newDescriptionValue, setNewDescriptionValue] = useState<string>("")
  const [newDayOfWeekValue, setNewnewDayOfWeekValue] = useState<any>("Monday") // solve this ANY type

  const router = useRouter()

  const resetStates = () => {
    setNewTaskNameValue("")
    // setNewDateValue("")
    setNewStartTimeValue("")
    setNewEndTimeValue("")
    setNewDescriptionValue("")
    setNewnewDayOfWeekValue("Monday")
  }

  return (
    <>
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
                      <label htmlFor="EditTaskModal">
                        <FiEdit size={15} className="cursor-pointer text-blue-400 mx-3" />
                      </label>
                      <ImBin size={15} className="cursor-pointer text-red-600" />
                    </span>
                  </p>

                  {isDescription && <small>{task.id === selectedTask && task.description}</small>}
                </div>
              )}
            </div>
          )
        })}
    </>
  )
}

export default Task
