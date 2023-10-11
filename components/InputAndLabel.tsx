import React from "react"
import { InputLabelProps } from "@/types"
import { useState } from "react"

const InputAndLabel = ({ type, title, ph }: InputLabelProps) => {
  const [state, setState] = useState("")
  //add if textarea : minRows
  return (
    <>
      <label>{title}</label>
      <br />
      <input type={type} value={state} onChange={(e) => setState(e.target.value)} placeholder={ph} />
      <br />
    </>
  )
}

export default InputAndLabel
