"use client"
import React, { FormEventHandler, useState } from "react"
import { modifyTask } from "@/api"
import { useRouter } from "next/navigation"
import { TaskProps, ITask } from "@/types"
import { FiEdit } from "react-icons/fi"
import { ImBin } from "react-icons/im"

const Task = ({ tasks, weekDay }: TaskProps) => {
  //
  const [isDescription, setIsDescription] = useState<boolean>(false) //enables description mode

  const [selectedId, setSelectedId] = useState<string>("")
  const [selectedTaskName, setSelectedTaskName] = useState<string>("")
  // const [newDateValue, setNewDateValue] = useState<string>("")
  const [selectedStartTime, setSelectedStartTime] = useState<string>("")
  const [selectedEndTime, setSelectedEndTime] = useState<string>("")
  const [selectedDescription, setSelectedDescription] = useState<string>("")
  const [selectedDayOfWeek, setSelectedDayOfWeek] = useState<any>("Monday") // solve this ANY type

  const router = useRouter()

  const resetStates = () => {
    setSelectedTaskName("")
    // setNewDateValue("")
    setSelectedStartTime("")
    setSelectedEndTime("")
    setSelectedDescription("")
    setSelectedDayOfWeek("Monday")
  }

  const changeStates = (valuesObj: ITask) => {
    setSelectedId(valuesObj.id)
    setSelectedTaskName(valuesObj.taskName)
    setSelectedStartTime(valuesObj.startTime)
    setSelectedEndTime(valuesObj.endTime)
    setSelectedDescription(valuesObj.description)
    setSelectedDayOfWeek(valuesObj.dayOfWeek)
  }

  const handleEditTaskForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await modifyTask({
      id: selectedId,
      taskName: selectedTaskName,
      startTime: selectedStartTime,
      endTime: selectedEndTime,
      // date: newDateValue,
      isDone: false,
      description: selectedDescription,
      dayOfWeek: selectedDayOfWeek,
    })
    resetStates()
    //refreshing
    router.refresh()
  }

  return (
    <>
      {/* if task. display every day with it's tasks */}
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
                        setIsDescription(!isDescription), setSelectedId(task.id)
                      }}
                    >
                      {task.taskName}
                    </b>
                    {/* icons EDIT and DELETE */}
                    <span className="flex">
                      <label htmlFor="EditTaskModal">
                        <FiEdit size={15} className="cursor-pointer text-blue-400 mx-3" onClick={() => changeStates(task)} />
                      </label>

                      <label htmlFor="DeleteTaskModal">
                        <ImBin size={15} className="cursor-pointer text-red-600" />
                      </label>
                    </span>
                  </p>
                  {/* display Description */}
                  {isDescription && <small>{task.id === selectedId && task.description}</small>}
                </div>
              )}
            </div>
          )
        })}

      {/*  Editing task form / modal*/}
      <>
        <input type="checkbox" id="EditTaskModal" className="modal-toggle" />
        <div className="modal">
          <div className="modal-box">
            <h3 className="text-lg font-bold mb-4">Let`s modify your task</h3>

            <form onSubmit={handleEditTaskForm}>
              <input
                type="text"
                value={selectedTaskName}
                onChange={(e) => setSelectedTaskName(e.target.value)}
                title="Task title"
                placeholder="--> enter task title here"
                className="block"
                required
              />
              {/* <input type="date" value={newDateValue} onChange={(e) => setNewDateValue(e.target.value)} title="Date" className="block" /> */}

              {/* weekday dropdown */}
              <div className="dropdown dropdown-right">
                <label tabIndex={0} className="btn m-1">
                  {selectedDayOfWeek}
                </label>

                <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                  <li>
                    <p onClick={() => setSelectedDayOfWeek("Monday")}>Monday</p>
                  </li>

                  <li>
                    <p onClick={() => setSelectedDayOfWeek("Tuesday")}>Tuesday</p>
                  </li>

                  <li>
                    <p onClick={() => setSelectedDayOfWeek("Wednesday")}>Wednesday</p>
                  </li>

                  <li>
                    <p onClick={() => setSelectedDayOfWeek("Thursday")}>Thursday</p>
                  </li>

                  <li>
                    <p onClick={() => setSelectedDayOfWeek("Friday")}>Friday</p>
                  </li>

                  <li>
                    <p onClick={() => setSelectedDayOfWeek("Saturday")}>Saturday</p>
                  </li>

                  <li>
                    <p onClick={() => setSelectedDayOfWeek("Sunday")}>Sunday</p>
                  </li>
                </ul>
              </div>
              {/* Start time */}
              <label htmlFor="" className="block">
                Start time
              </label>
              <input
                type="time"
                value={selectedStartTime}
                onChange={(e) => setSelectedStartTime(e.target.value)}
                title="Start Time"
                className="block"
                required
              />
              {/* End time */}
              <label htmlFor="">End time</label>
              <input
                type="time"
                value={selectedEndTime}
                onChange={(e) => setSelectedEndTime(e.target.value)}
                title="End Time"
                className="block"
                required
              />
              {/* Description */}
              <textarea
                className="textarea textarea-info"
                value={selectedDescription}
                onChange={(e) => setSelectedDescription(e.target.value)}
                title="Description"
                placeholder="Insert description"
                required
              />

              <button type="submit" className="btn block">
                Submit
              </button>
            </form>
          </div>
          <label className="modal-backdrop" htmlFor="EditTaskModal">
            Close
          </label>
        </div>
      </>
    </>
  )
}

export default Task
