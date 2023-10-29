"use client"
import { v4 as uuidv4 } from "uuid"
import React, { FormEventHandler, useState, useReducer } from "react"
import { createTask } from "@/api"
import { useRouter } from "next/navigation"
// import { ITask } from "@/types"
import { initialState, reducer, daysOfWeek } from "./States"

const AddTask = () => {
  const [state, dispatch] = useReducer(reducer, initialState)

  const router = useRouter()

  const handleNewTaskForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault()

    try {
      await createTask({
        id: uuidv4(),
        taskName: state.newTaskNameValue,
        startTime: state.newStartTimeValue,
        endTime: state.newEndTimeValue,
        isDone: false,
        description: state.newDescriptionValue,
        dayOfWeek: state.newDayOfWeekValue,
      })

      // Close the modal after submission
      dispatch({ type: "closeEditModal" })
      dispatch({ type: "reset" })

      // Refreshing
      router.refresh()
    } catch (error) {
      // Display an error message to the user, e.g., with a toast message
      console.error("Error creating task:", error)
    }
  }

  return (
    <>
      {/* The button to open modal */}
      <label htmlFor="AddTaskModal" className="btn my-5">
        Add task
      </label>

      <input
        type="checkbox"
        onClick={() => dispatch({ type: "openEditModal" })}
        checked={state.isEditTaskModalOpen}
        id="AddTaskModal"
        className="modal-toggle"
      />
      <div className="modal">
        <div className="modal-box">
          <h3 className="text-lg font-bold mb-4">Add your task!</h3>
          <form
            onSubmit={handleNewTaskForm}
            onAbort={() => {
              dispatch({ type: "reset" }), dispatch({ type: "closeEditModal" })
            }}
          >
            <input
              type="text"
              value={state.newTaskNameValue}
              onChange={(e) => dispatch({ type: "updateTaskName", payload: e.target.value })}
              title="Task title"
              placeholder="--> enter task title here"
              className="block"
              required
            />
            {/* <input type="date" value={newDateValue} onChange={(e) => setNewDateValue(e.target.value)} title="Date" className="block" /> */}

            {/* weekday dropdown */}
            <div className="dropdown dropdown-right">
              <label tabIndex={0} className="btn m-1">
                {state.weekDay}
              </label>

              <ul tabIndex={0} className="dropdown-content z-[1] menu p-2 shadow bg-base-100 rounded-box w-52">
                {daysOfWeek.map((day) => (
                  <li key={day}>
                    <p onClick={() => dispatch({ type: "updateDayOfWeek", payload: day })}>{day}</p>
                  </li>
                ))}
              </ul>
            </div>
            {/* Start time */}
            <label htmlFor="" className="block">
              Start time
            </label>
            <input
              type="time"
              // value={newStartTimeValue}
              value={state.newStartTimeValue}
              // onChange={(e) => setNewStartTimeValue(e.target.value)}
              onChange={(e) => dispatch({ type: "updateStartTime", payload: e.target.value })}
              title="Start Time"
              className="block"
              required
            />
            {/* End time */}
            <label htmlFor="">End time</label>
            <input
              type="time"
              // value={newEndTimeValue}
              value={state.newEndTimeValue}
              // onChange={(e) => setNewEndTimeValue(e.target.value)}
              onChange={(e) => dispatch({ type: "updateEndTime", payload: e.target.value })}
              title="End Time"
              className="block"
              required
            />
            {/* Description */}
            <textarea
              className="textarea textarea-info"
              // value={newDescriptionValue}
              value={state.newDescriptionValue}
              // onChange={(e) => setNewDescriptionValue(e.target.value)}
              onChange={(e) => dispatch({ type: "updateDescription", payload: e.target.value })}
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
    </>
  )
}

export default AddTask
