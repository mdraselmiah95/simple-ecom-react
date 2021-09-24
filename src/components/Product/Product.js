import React from "react";
import "./Product.css";
const Product = (props) => {
  console.log(props.product);
  const { name, seller, stock, img, star, price } = props.product;

  return (
    <div className="product-container">
      <div className="product-img">
        <img src={img} alt="photos" />
      </div>
      <div className="product-details">
        <h5>{name}</h5>
        <p>
          <small>by: {seller}</small>
        </p>
        <br />
        <h4>${price}</h4>
        <p>
          <small>only {stock} left in stock - order soon</small>
        </p>
      </div>
    </div>
  );
};

export default Product;
