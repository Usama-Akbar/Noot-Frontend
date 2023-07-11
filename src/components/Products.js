import React, { useState, useEffect } from "react";
import product from "../assets/product.png";
import { Rate } from "antd";
import "../styles/Products.css";
export default function Products() {
  const [products, setProducts] = useState([]);
  async function GetProducts() {
    const response = await fetch("https://acad-ecommerce.noot.ae/products/");
    const data = await response.json();
    console.log(data.results);
    setProducts(data.results);
  }

  useEffect(() => {
    GetProducts();
  }, [null]);

  return (
    <div className="category-products-div">
      <div>
        <h1 className="featured-title ">Featured Products</h1>
        {product.length > 0
          ? products.map((product, index) => (
              <div key={index} className="product-main-div mt-4">
                <div>
                  <img src={product} />
                </div>
                <div className="product-details-div ms-4">
                  <span className="product-title">
                    {product.name[0].text + " " + product.description[0].text}
                  </span>
                  <Rate disabled defaultValue={product.rate} />
                  <span className="product-price">
                    ${product.items[0].price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>
      <div>
        <h1 className="featured-title">On Sale Products</h1>
        {product.length > 0
          ? products.map((product, index) => (
              <div key={index} className="product-main-div mt-4">
                <div>
                  <img src={product} />
                </div>
                <div className="product-details-div ms-4">
                  <span className="product-title">
                    {product.name[0].text + " " + product.description[0].text}
                  </span>
                  <Rate disabled defaultValue={product.rate} />
                  <span className="product-price">
                    ${product.items[0].price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>
      <div>
        <h1 className="featured-title">Top Rated Products</h1>
        {product.length > 0
          ? products.map((product, index) => (
              <div key={index} className="product-main-div mt-4">
                <div>
                  <img src={product} />
                </div>
                <div className="product-details-div ms-4">
                  <span className="product-title">
                    {product.name[0].text + " " + product.description[0].text}
                  </span>
                  <Rate disabled defaultValue={product.rate} />
                  <span className="product-price">
                    ${product.items[0].price.toLocaleString()}
                  </span>
                </div>
              </div>
            ))
          : null}
      </div>
    </div>
  );
}
