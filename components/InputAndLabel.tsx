"use client"
import React from "react"
import { InputLabelProps } from "@/types"
import { useState } from "react"
import { changeVariableName } from "../functions/functionsAndVars"

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
          setValue(e.target.value), changeVariableName(title, value)
        }}
        placeholder={ph}
      />
      <br />
    </>
  )
}

export default InputAndLabel
