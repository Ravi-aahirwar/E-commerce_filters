import React from 'react'

function Searchbar({ handleChange, query }) {
  return (
    <div>
      <input
        type="text"
        placeholder='Search...'
        value={query}
        onChange={handleChange}
        style={{
          height:"100%",width:"100%",padding:"10px",borderRadius:"10px",border:"1px solid white"
        }}
      />
    </div>
  )
}

export default Searchbar
