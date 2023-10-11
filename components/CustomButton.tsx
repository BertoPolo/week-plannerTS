"use client"
import React from "react"
import { CustomButtonProps } from "@/types"

const CustomButton = ({ launchFunction, title, classToStyle }: CustomButtonProps) => {
  return (
    <>
      <button type="button" onClick={(e) => launchFunction(e)} className={classToStyle || "bg-sky-400 hover:bg-sky-600 p-2 rounded-full"}>
        {title}
      </button>
    </>
  )
}

export default CustomButton
