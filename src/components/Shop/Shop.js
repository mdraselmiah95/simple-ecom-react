import React, { useEffect, useState } from "react";
import Product from "../Product/Product";
import "./Shop.css";
const Shop = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch(
      "https://raw.githubusercontent.com/ProgrammingHero1/ema-john-simple-resources/master/fakeData/products.JSON"
    )
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  const handleSearch = (event) => {
    const searchText = event.target.value;
    const matchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(searchText.toLowerCase())
    );
    console.log(matchedProducts.length);
  };

  return (
    <>
      <div className="search-container">
        <input
          type="text"
          onChange={handleSearch}
          id=""
          placeholder="search product"
        />
      </div>
      <div className="main-container">
        <div className="shop-container">
          {products.map((product) => (
            <Product key={product.key} product={product} />
          ))}
        </div>
        <order className="container">Order</order>
      </div>
    </>
  );
};

export default Shop;
