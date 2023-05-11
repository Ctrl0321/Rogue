import React, { useState, useEffect } from "react";
import "../Css/Product.css";

const Product = ({ name, image, price, stock, id }) => {
  const [showId, setShowId] = useState(false);

  const handleBuyClick = () => {
    setShowId(true);
    console.log(name + "\n" + price);
  };
  return (
    <div className="product">
      <img src={image} alt={name} className="product-image" />
      <h3 className="product-name">{name}</h3>
      <p className="product-price">${price}</p>
      <div className="product-stock">
        <span>S: {stock.s}</span>
        <span>M: {stock.m}</span>
        <span>L: {stock.l}</span>
        <span>XL: {stock.xl}</span>
      </div>

      <button className="buy-button" onClick={handleBuyClick}>
        Buy
      </button>
      {showId && <p className="product-id">Product ID: {id}</p>}
    </div>
  );
};

export default Product;
