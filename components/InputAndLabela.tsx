import React from "react"
import { InputLabelProps } from "@/types"

const InputAndLabel = ({ type, variableNameToUpdate, title, ph }: InputLabelProps) => {
  return (
    <>
      <label>{title}</label>
      <br />
      <input type={type} value={variableNameToUpdate} onChange={(e) => (variableNameToUpdate = e.target.value)} placeholder={ph} />
    </>
  )
}

export default InputAndLabel
