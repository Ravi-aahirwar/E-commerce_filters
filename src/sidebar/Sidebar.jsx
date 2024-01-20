import React from 'react'
import Category from './category/Category'
import Color from './color/Color'
import Price from './price/Price'
import "./Sidebar.css"
export default function Sidebar({handlecategory}) {
    return (
        <div className='sidebar-div'>
            <Category handlecategory={handlecategory} />
            <Color handlecategory={handlecategory} />
            <Price handlecategory={handlecategory} />
        </div>
    )
}
