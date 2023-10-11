import React from "react"
import { InputLabelProps } from "@/types"
import { useState } from "react"

const InputAndLabel = ({ type, title, ph }: InputLabelProps) => {
  const [lala, setLala] = useState("")

  return (
    <>
      <label>{title}</label>
      <br />
      <input type={type} value={lala} onChange={(e) => setLala(e.target.value)} placeholder={ph} />
    </>
  )
}

export default InputAndLabel
