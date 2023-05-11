import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Product from "./Product";
import "../Css/Home.css";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchProducts();
  }, []);

  const fetchProducts = () => {
    axios
      .get("http://localhost:8001/tshirt") // Replace with your API endpoint
      .then((response) => {
        // setProducts(response.data);
        setProducts(response.data.slice(0, 4));
      })
      .catch((error) => {
        console.error("Error:", error);
      });
  };
  return (
    <div>
      <Navbar />
      <div className="space"></div>
      <div className="prod">
        {/* <h1>E-Commerce Website</h1> */}
        {products.map((product) => (
          <Product
            key={product._id}
            image={""}
            name={product.name}
            price={product.price}
            stock={product.stock}
            id={product._id}
          />
        ))}
      </div>
    </div>
  );
};
export default Home;
