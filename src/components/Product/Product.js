import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import Rating from "react-rating";
import "./Product.css";
const Product = (props) => {
  // console.log(props.product);
  const { name, seller, stock, img, star, price } = props.product;
  const fontIcon = <FontAwesomeIcon icon={faShoppingCart} />;
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
        <p className="stock">
          <small>only {stock} left in stock - order soon</small>
        </p>
        <br />
        <Rating
          initialRating={star}
          emptySymbol="far fa-star"
          fullSymbol="fas fa-star"
          readonly
        />
        <br />
        <button>{fontIcon} ADD TO CART</button>
      </div>
    </div>
  );
};

export default Product;
