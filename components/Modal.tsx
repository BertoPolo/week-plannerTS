"use client"
import { createTask } from "@/functions/functionsAndVars"
import { Textarea } from "@nextui-org/react"
import React, { useState } from "react"
// import { inputAndLabel } from "./InputAndLabel"

const Modal = () => {
  const [isModal, setIsModal] = useState<boolean>(false)

  return (
    <div>
      {/* The button to open modal */}
      <label htmlFor="AddTaskModal" className="btn">
        Add task
      </label>

      {/* Put this part before </body> tag */}
      <input type="checkbox" id="AddTaskModal" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold">Hello!</h3>
          <p className="py-4">This modal works with a hidden checkbox!</p>

          <form action="">
            <input type="text" title="Task title" placeholder="enter task here" />
            <input type="date" title="Date" />
            <input type="time" title="Start Time" />
            <input type="time" title="End Time" />
            <Textarea type="textarea" title="Description" minRows={3} placeholder="Insert description" />
            <button type="submit">Submit</button>
          </form>
        </div>
        <label className="modal-backdrop" htmlFor="AddTaskModal">
          Close
        </label>
      </div>

      {/* <button className="btn" onClick={() => setIsModal(true)}>
        open modal
      </button>
      <dialog id="my_modal_2" className="modal">
        <div className="modal-box">
          <h3 className="font-bold text-lg">Hello!</h3>
          <p className="py-4">Press ESC key or click outside to close</p>
        </div>
        <form method="dialog" className="modal-backdrop">
          <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
        </form>
      </dialog> */}
      {/* {inputAndLabel} */}
    </div>
  )
}

export default Modal
