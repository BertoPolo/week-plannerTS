import React from "react"

const SingleDay = () => {
  // each task:ITask
  return (
    <div className="overflow-x-auto">
      <table className="table table-sm">
        {/* head */}
        <thead>
          <tr>
            <th className="w-9">Start Time</th>
            <th className="w">Task Title</th>
            <th>Description</th>
            <th className="w-9">End Time</th>
          </tr>
        </thead>
        <tbody>
          {/* row 1 */}
          <tr className="hover">
            <td>14:35</td>
            <td>Go to the pool</td>
            <td>Take the helmet and gloves for the bike</td>
            <td>15:35</td>
          </tr>
          {/* row 2 */}
          <tr className="hover">
            <th>2</th>
            <td>Hart Hagerty</td>
            <td>Desktop Support Technician</td>
            <td>Purple</td>
          </tr>
          {/* row 3 */}
          <tr className="hover">
            <th>3</th>
            <td>Brice Swyre</td>
            <td>Tax Accountant</td>
            <td>Red</td>
          </tr>
        </tbody>
      </table>
    </div>
  )
}

export default SingleDay
