"use client"
import React, { useState, useEffect } from "react"
// import { changeTheme } from "./layout"

// function toggleTheme() {
//   const currentTheme = document.documentElement.getAttribute("data-theme")
//   const newTheme = currentTheme === "light" ? "dark" : "light"
//   document.documentElement.setAttribute("data-theme", newTheme)
// }

const ThemeButton = () => {
  return (
    <div>
      {/* <button className="ml-3" onClick={() => setColor("dark")}> */}
      {/* <button className="ml-3 cursor-pointer" onClick={() => changeTheme}> */}
      <button className="ml-3 cursor-pointer" onClick={() => alert("sorry I don't work yet")}>
        to dark
      </button>
    </div>
  )
}

export default ThemeButton
