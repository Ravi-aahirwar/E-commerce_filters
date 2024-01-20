import React from 'react'
import "./Recommended.css"
export default function Recommended({ handleClicked, selectBtn }) {
  return (
    <div>
      <div>
        <div className='recommend-flex'>
          <button onClick={() => handleClicked("")} value="" style={{ backgroundColor: `${selectBtn === "" ? "red" : ""}` }}>All Products </button>
          <button onClick={() => handleClicked("Nike")} value="Nike" style={{ backgroundColor: `${selectBtn === "Nike" ? "red" : ""}` }}>Nike </button>
          <button onClick={() => handleClicked("Adidas")} value="Adidas" style={{ backgroundColor: `${selectBtn === "Adidas" ? "red" : ""}` }}>Adidas</button>
          <button onClick={() => handleClicked("Puma")} value="Puma" style={{ backgroundColor: `${selectBtn === "Puma" ? "red" : ""}` }}>Puma</button>
          <button onClick={() => handleClicked("Vans")} value="Vans" style={{ backgroundColor: `${selectBtn === "Vans" ? "red" : ""}` }}>Vans</button>
        </div>
      </div>
    </div>
  )
}
