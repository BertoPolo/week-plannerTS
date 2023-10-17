"use client"
import { v4 as uuidv4 } from "uuid"
import React, { FormEventHandler, useState } from "react"
import { createTask } from "@/api"
import { useRouter } from "next/navigation"

const Modal = () => {
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

  const handleNewTaskForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    await createTask({
      id: uuidv4(),
      taskName: newTaskNameValue,
      startTime: newStartTimeValue,
      endTime: newEndTimeValue,
      // date: newDateValue,
      isDone: false,
      description: newDescriptionValue,
      dayOfWeek: newDayOfWeekValue,
    })
    resetStates()
    //refreshing
    router.refresh()
  }

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="AddTaskModal" className="btn my-5">
        Add task
      </label>

      <input type="checkbox" id="AddTaskModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Add your task!</h3>

          <form onSubmit={handleNewTaskForm}>
            <input
              type="text"
              value={newTaskNameValue}
              onChange={(e) => setNewTaskNameValue(e.target.value)}
              title="Task title"
              placeholder="--> enter task title here"
              className="block"
              required
            />
            {/* <input type="date" value={newDateValue} onChange={(e) => setNewDateValue(e.target.value)} title="Date" className="block" /> */}

            {/* weekday dropdown */}
            <div className="dropdown dropdown-right">
              <label tabIndex={0} className="btn m-1">
                {newDayOfWeekValue}
              </label>

              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <p onClick={() => setNewnewDayOfWeekValue("Monday")}>Monday</p>
                </li>

                <li>
                  <p onClick={() => setNewnewDayOfWeekValue("Tuesday")}>Tuesday</p>
                </li>

                <li>
                  <p onClick={() => setNewnewDayOfWeekValue("Wednesday")}>Wednesday</p>
                </li>

                <li>
                  <p onClick={() => setNewnewDayOfWeekValue("Thursday")}>Thursday</p>
                </li>

                <li>
                  <p onClick={() => setNewnewDayOfWeekValue("Friday")}>Friday</p>
                </li>

                <li>
                  <p onClick={() => setNewnewDayOfWeekValue("Saturday")}>Saturday</p>
                </li>

                <li>
                  <p onClick={() => setNewnewDayOfWeekValue("Sunday")}>Sunday</p>
                </li>
              </ul>
            </div>
            {/* Start time */}
            <label htmlFor="" className="block">
              Start time
            </label>
            <input
              type="time"
              value={newStartTimeValue}
              onChange={(e) => setNewStartTimeValue(e.target.value)}
              title="Start Time"
              className="block"
              required
            />
            {/* End time */}
            <label htmlFor="">End time</label>
            <input
              type="time"
              value={newEndTimeValue}
              onChange={(e) => setNewEndTimeValue(e.target.value)}
              title="End Time"
              className="block"
              required
            />
            {/* Description */}
            <textarea
              className="textarea textarea-info"
              value={newDescriptionValue}
              onChange={(e) => setNewDescriptionValue(e.target.value)}
              title="Description"
              placeholder="Insert description"
              required
            />

            <button type="submit" className="btn block">
              Submit
            </button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="AddTaskModal">
          Close
        </label>
      </div>
    </div>
  )
}

export default Modal
