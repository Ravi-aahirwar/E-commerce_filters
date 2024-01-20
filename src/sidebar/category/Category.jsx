import React from 'react'
import "./Category.css"
import Input from "../../components/Input"
export default function Category({handlecategory}) {
  return (
    <div>
      <div className='category-div'>
        <h2>Category</h2>
        <div className='inner-div' >
        <label className="sidebar-label-container">
          <input onChange={handlecategory} type="radio" value="" name="test" />
          <span className="checkmark"></span>All
        </label>
        <Input
          handlecategory={handlecategory}
          value="sneakers"
          title="Sneakers"
          name="test"
          />
        <Input
          handlecategory={handlecategory}
          value="flats"
          title="Flats"
          name="test"
          />
        <Input
          handlecategory={handlecategory}
          value="sandals"
          title="Sandals"
          name="test"
          />
        <Input
          handlecategory={handlecategory}
          value="heels"
          title="Heels"
          name="test"
          />
          </div>
      </div>
    </div>
  )
}
