"use client"
import React, { useState } from "react"
import { InputLabelProps } from "@/types"
import { changeInputValue } from "../functions/functionsAndVars"

const InputAndLabel = ({ type, title, ph }: InputLabelProps) => {
  const [value, setValue] = useState("") // this is the value used to modify the global variable
  //add if textarea : minRows
  return (
    <>
      <label>{title}</label>
      <br />
      <input
        type={type}
        value={value}
        onChange={(e) => {
          setValue(e.target.value), changeInputValue(title, e.target.value)
        }}
        placeholder={ph}
      />
      <br />
    </>
  )
}

export default InputAndLabel
