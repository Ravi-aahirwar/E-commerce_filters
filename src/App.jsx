import React, { useState } from 'react'
import Recommended from './recommended/Recommended'
import Card from './components/card/Card'
import product from "./db/product"
import Products from './products/Products'
import Searchbar from './search/Searchbar'
import Sidebar from './sidebar/Sidebar'
import "./App.css"
export default function App() {

  document.title="React | Filters"

  const [query, setQuery] = useState("");
  const handleChange = (event) => {
    setQuery(event.target.value);
  };

  const filteredItems = product.filter(
    (product) => product.title.toLowerCase().indexOf(query.toLowerCase()) !== -1
  );


  const [selectBtn, setSelectBtn] = useState("")
  const handleClicked = (num) => {
    setSelectBtn(num);
  };

  const [categoryBtn, setCategory] = useState(null)
  const handlecategory = (event) => {
    setCategory(event.target.value)
  }

  console.log(categoryBtn)
  function filteredData(products, query, selectBtn, categoryBtn) {
    let filteredProducts = products;

    if (query) {
      filteredProducts = filteredItems;
    }
    if (selectBtn) {
      filteredProducts = filteredProducts.filter(
        ({ company }) =>
          company === selectBtn
      );
    }
    if (categoryBtn) {
      filteredProducts = filteredProducts.filter(
        ({ category, color, company, newPrice, title }) =>
          category === categoryBtn ||
          company === categoryBtn ||
          newPrice === categoryBtn ||
          title === categoryBtn ||
          color === categoryBtn
      );
    }
    return filteredProducts.map(
      ({ img, title, star, reviews, prevPrice, newPrice }) => (
        <Card
          key={Math.random()}
          img={img}
          title={title}
          star={star}
          reviews={reviews}
          prevPrice={prevPrice}
          newPrice={newPrice}
        />
      )
    );
  }

  const result = filteredData(product, query, selectBtn, categoryBtn);
  return (
    <>
      <div className='nav-div'>
        <div className='search-box'>
          <Searchbar handleChange={handleChange} query={query} />
        </div>
        <div className='recommend-div'>
          <Recommended handleClicked={handleClicked} selectBtn={selectBtn} />
        </div>
      </div>
      <div className='app-container'>
        <div className='left-div'>
          <Sidebar handlecategory={handlecategory} />
        </div>
        <div className='right-div'>
          {
            result.length <= 0 ? (
              <center><h3>No items found that match your filter.</h3></center>
            ) : (
              <Products result={result} />
            )
          }

        </div>
      </div>
    </>
  )
}
