import React from 'react'

export default function Input({ handlecategory, value, title, name, color }) {

  console.log(color,value)
  return (
    <label>
      <input onChange={handlecategory} type="radio" value={value} name={name} />
      <span className="checkmark" style={{ backgroundColor: color }}></span>
      {title}
    </label>
  )
}
