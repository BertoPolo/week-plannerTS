"use client"
import { v4 as uuidv4 } from "uuid"
import React, { FormEventHandler, useState } from "react"
import { createTask } from "@/api"

const Modal = () => {
  const [newTaskNameValue, setNewTaskNameValue] = useState<string>("")
  const [newDateValue, setNewDateValue] = useState<string>("")
  const [newStartTimeValue, setNewStartTimeValue] = useState<string>("")
  const [newEndTimeValue, setNewEndTimeValue] = useState<string>("")
  const [newDescriptionValue, setNewDescriptionValue] = useState<string>("")

  const handleNewTaskForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()
    await createTask({
      id: uuidv4(),
      taskName: newTaskNameValue,
      startTime: newStartTimeValue,
      endTime: newEndTimeValue,
      date: newDateValue,
      isDone: false,
      description: newDescriptionValue,
    })

    setNewTaskNameValue("")
    setNewDateValue("")
    setNewStartTimeValue("")
    setNewEndTimeValue("")
    setNewDescriptionValue("")
  }

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="AddTaskModal" className="btn">
        Add task
      </label>

      <input type="checkbox" id="AddTaskModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Add your task!</h3>

          <form onSubmit={handleNewTaskForm}>
            <input
              type="text"
              value={newTaskNameValue}
              onChange={(e) => setNewTaskNameValue(e.target.value)}
              title="Task title"
              placeholder="enter task here"
              className="block"
            />
            {/* <input type="date" value={newDateValue} onChange={(e) => setNewDateValue(e.target.value)} title="Date" className="block" /> */}
            <div className="dropdown dropdown-right">
              <label tabIndex={0} className="btn m-1">
                Click
              </label>
              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                <li>
                  <a>day 1</a>
                </li>
                <li>
                  <a>day 2</a>
                </li>
                <li>
                  <a>day 3</a>
                </li>
                <li>
                  <a>day 4</a>
                </li>
              </ul>
            </div>
            <input
              type="time"
              value={newStartTimeValue}
              onChange={(e) => setNewStartTimeValue(e.target.value)}
              title="Start Time"
              className="block"
            />
            <input type="time" value={newEndTimeValue} onChange={(e) => setNewEndTimeValue(e.target.value)} title="End Time" className="block" />
            <textarea
              className="textarea textarea-info"
              value={newDescriptionValue}
              onChange={(e) => setNewDescriptionValue(e.target.value)}
              title="Description"
              placeholder="Insert description"
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
