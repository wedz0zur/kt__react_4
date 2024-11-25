import React, { useState, useEffect, useContext, createContext } from "react";
import Rating from "./Rating";
import "./styles/style.css";
import { Link } from "react-router-dom";

const ProductsPage = () => {
  const [data, setData] = useState([]);

  const handleId = (id) => {
    console.log(id);
    <idProduct value={id} />;
  };
  useEffect(() => {
    fetch("https://671f75cfe7a5792f052e55dd.mockapi.io/items")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  return (
    <div className="products-container">
      {data.map((product) => (
        <Link className="link" onClick={() => handleId(product.id)} to={`product/${product.id}`}>
          <div key={product.id} className="product-card">
            <h3>{product.title}</h3>
            <p>Price: <span className="span">{product.price}$</span></p>
            <Rating rating={product.rating.rate} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ProductsPage;
