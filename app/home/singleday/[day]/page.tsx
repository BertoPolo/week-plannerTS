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
      <div className="join">
        <button className="join-item btn btn-sm">1</button>
        <button className="join-item btn btn-sm">2 </button>
        <button className="join-item btn btn-sm btn-active">{params.day}</button>
        <button className="join-item btn btn-sm">4</button>
        <button className="join-item btn btn-sm">5</button>
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
