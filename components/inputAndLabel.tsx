import React from "react"
import { ButtonProps } from "@/types"

const inputAndLabel = ({ type, onChangeFunction, title, variable, ph }: ButtonProps) => {
  return (
    <>
      <label>{title}</label>
      <input type={type} value={variable} onChange={(e) => onChangeFunction(e.target.value)} placeholder={ph} />
    </>
  )
}

export default inputAndLabel
