import React from 'react'

const inputAndLabel = ({type,onChangeFunction,title,ph}:ButtonProps) => {
  return (
    <div>
    <label>{title}</label>
    <input type={type},onChange={onChangeFunction},placeholder={ph}  />
    </div>
  )
}

export default inputAndLabel