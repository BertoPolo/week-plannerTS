import React from "react"
import { CustomButtonProps } from "@/types"
{
  /* <button onCLick title style(do a default if this is empty) /> */
}

const customButton = ({ launchFunction, title, style }: CustomButtonProps) => {
  return (
    <>
      <button type="button" onClick={(e) => launchFunction(e)} className={style}>
        {title}
      </button>
    </>
  )
}

export default customButton
