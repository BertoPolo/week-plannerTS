"use client"
import React, { useEffect, useState } from "react"
import Link from "next/link"
import { getTasks } from "@/api"
import { Params } from "next/dist/shared/lib/router/utils/route-matcher"

const SingleDay = ({ params }: Params) => {
  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const fetchTasks = async () => {
      try {
        const fetchedTasks = await getTasks(params.day)
        if (fetchedTasks.length > 0) {
          fetchedTasks.sort((a, b) => (a.startTime < b.startTime ? -1 : a.startTime > b.startTime ? 1 : 0))
        }
        setTasks(fetchedTasks)
      } catch (error) {
        console.error("Error fetching tasks:", error)
      }
    }

    fetchTasks()
  }, [params.day])

  let days = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"]

  return (
    <>
      <div className="join flex justify-center">
        {days.map((day) => (
          <button key={day} className={`join-item btn btn-sm ${params.day === day ? "glass" : ""}`}>
            <Link href={`/home/singleday/${day}`}>{day}</Link>
          </button>
        ))}
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
