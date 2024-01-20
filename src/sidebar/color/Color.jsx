import React from 'react'
import Input from '../../components/Input'
export default function Color({ handlecategory }) {
  return (
    <div className="outer-div">
      <h2 className="sidebar-title color-title">Colors</h2>
      <div className='inner-div'>
        <label className="sidebar-label-container">
          <input onChange={handlecategory} type="radio" value="" name="test1" />
          <span className="checkmark all"></span>
          All
        </label>

        <Input
          handhandlecategory={handlecategory}
          value="black"
          title="Black"
          name="test1"
          color="black"
        />

        <Input
          handhandlecategory={handlecategory}
          value="blue"
          title="Blue"
          name="test1"
          color="blue"
        />

        <Input
          handlecategory={handlecategory}
          value="red"
          title="Red"
          name="test1"
          color="red"
        />

        <Input
          handhandlecategory={handlecategory}
          value="green"
          title="Green"
          name="test1"
          color="green"
        />

        <label className="sidebar-label-container">
          <input
            onChange={handlecategory}
            type="radio"
            value="white"
            name="test1"
          />
          <span
            className="checkmark"
            style={{ background: "white", border: "2px solid black" }}
          ></span>
          White
        </label>
      </div>
    </div>
  )
}
