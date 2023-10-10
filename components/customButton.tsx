import React from "react"
import { CustomButtonProps } from "@/types"
{
  /* <button onCLick title style(do a default if this is empty) /> */
}

const customButton = ({ launchFunction, title, style, type }: CustomButtonProps) => {
  return (
    <>
      <button type={type} onClick={(e) => launchFunction(e)} className={style}>
        {title}
      </button>
    </>
  )
}

export default customButton
