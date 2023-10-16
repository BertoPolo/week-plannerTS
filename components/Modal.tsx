"use client"
import { v4 as uuidv4 } from "uuid"
import React, { FormEventHandler, useState } from "react"

const Modal = () => {
  const [newIdValue, setNewIdValue] = useState<string>(uuidv4)
  const [newTaskNameValue, setNewTaskNameValue] = useState<string>("")
  const [newDateValue, setNewDateValue] = useState<string>("")
  const [newStartTimeValue, setNewStartTimeValue] = useState<string>("")
  const [newEndTimeValue, setNewEndTimeValue] = useState<string>("")
  const [newDescriptionValue, setNewDescriptionValue] = useState<string>("")

  const createTask: FormEventHandler<HTMLFormElement> = (e) => {
    e.preventDefault()
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

          <form onSubmit={createTask}>
            <input
              type="text"
              value={newTaskNameValue}
              onChange={(e) => setNewTaskNameValue(e.target.value)}
              title="Task title"
              placeholder="enter task here"
              className="block"
            />
            <input type="date" value={newDateValue} onChange={(e) => setNewDateValue(e.target.value)} title="Date" className="block" />
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
