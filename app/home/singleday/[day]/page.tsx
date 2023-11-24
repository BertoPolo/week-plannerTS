import { Params } from "next/dist/shared/lib/router/utils/route-matcher"
import React from "react"
import { getTasks } from "@/api"

const SingleDay = async ({ params }: Params) => {
  const tasks = await getTasks(params.day)

  //   sorting by startTime
  if (tasks.length > 0) {
    tasks.sort((a, b) => {
      if (a.startTime < b.startTime) return -1
      if (a.startTime > b.startTime) return 1

      return 0
    })
  }

  return (
    <>
      <div className="join flex justify-center">
        {/* if params.day   add class btn-active / glass */}
        <button className="join-item btn btn-sm">Monday</button>
        <button className="join-item btn btn-sm ">Tuesday </button>
        <button className="join-item btn btn-sm btn-active">Wednesday</button>
        <button className="join-item btn btn-sm">Thursday</button>
        <button className="join-item btn btn-sm">Friday</button>
        <button className="join-item btn btn-sm">Saturday</button>
        <button className="join-item btn btn-sm">Sunday</button>
      </div>
      <div className="overflow-x-auto">
        <table className="table table-sm">
          {/* head */}
          <thead>
            <tr>
              <th className="w-9">Start Time</th>
              <th className="">Task Title</th>
              <th>Description</th>
              <th className="w-9">End Time</th>
            </tr>
          </thead>
          <tbody>
            {tasks.length <= 0 ? (
              <tr className="hover">
                <td></td>
                <td></td>
                <td>There´s no plans for today!</td>
                <td></td>
              </tr>
            ) : (
              tasks.map((task) => {
                return (
                  <tr className="hover" key={task.id}>
                    <td>{task.startTime}</td>
                    <td>{task.taskName}</td>
                    <td>{task.description}</td>
                    <td>{task.endTime}</td>
                  </tr>
                )
              })
            )}
          </tbody>
        </table>
      </div>
    </>
  )
}

export default SingleDay
