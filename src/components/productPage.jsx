import Navbar from "./navbar";
import React from "react";
import Products from "./products";
import { useEffect, useState } from "react";
import "./products.css";
import Footer from "./footer";

export default function ProductPage() {
  const [products, setProducts] = useState([]);
  useEffect(() => {
    async function fetchData() {
      try {
        const response = await fetch("https://road-rambunctious-column.glitch.me/getproducts");
        const responseData = await response.json();
        setProducts(responseData.products);
      } catch (error) {
        setProducts([]);
      }
    }
    fetchData();
  }, []);

  return (
    <>
      <Navbar />
      <div className="products-container">
        {products == [] ? (
          <div>Loading</div>
        ) : (
          products.map((product) => (
            <>
              {console.log(product)}
              <Products key={product.id} product={product} />
            </>
          ))
        )}
      </div>
      <Footer />
    </>
  );
}
