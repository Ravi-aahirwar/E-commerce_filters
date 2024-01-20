import React from 'react'
import Input from '../../components/input'
export default function Price({ handlecategory }) {
  return (
    <div className="ml">
      <h2 className="sidebar-title price-title">Price</h2>
      <div className='inner-div'>
        <label className="sidebar-label-container">
          <input onChange={handlecategory} type="radio" value="" name="test2" />
          <span className="checkmark"></span>All
        </label>

        <Input
          handlecategory={handlecategory}
          value={50}
          title="$0 - 50"
          name="test2"
        />

        <Input
          handlecategory={handlecategory}
          value={100}
          title="$50 - $100"
          name="test2"
        />

        <Input
          handlecategory={handlecategory}
          value={150}
          title="$100 - $150"
          name="test2"
        />

        <Input
          handlecategory={handlecategory}
          value={200}
          title="Over $150"
          name="test2"
        />
      </div>
    </div>
  )
}
