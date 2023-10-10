import React from "react"
import { inputLabelProps } from "@/types"

const inputAndLabel = ({ type, onChangeFunction, title, variable, ph }: inputLabelProps) => {
  return (
    <>
      <label>{title}</label>
      <input type={type} value={variable} onChange={(e) => onChangeFunction(e.target.value)} placeholder={ph} />
    </>
  )
}

export default inputAndLabel
