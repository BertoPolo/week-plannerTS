import React from "react"
import { CustomButtonProps } from "@/types"
{
  /* <button onCLick title style(do a default if this is empty) /> */
}

const CustomButton = ({ launchFunction, title, classToStyle }: CustomButtonProps) => {
  if (classToStyle === undefined) classToStyle = "bg-sky-400 hover:bg-sky-600 p-2 rounded-full"
  return (
    <>
      <button type="button" onClick={(e) => launchFunction(e)} className={classToStyle}>
        {title}
      </button>
    </>
  )
}

export default CustomButton
