import React, { useState } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { products } from "../data";

const Home = ({ setPage, cart, setCart }) => {
  const [filter, setFilter] = useState("All");

  const addToCart = (product) => {
    setCart([...cart, product]);
  };

  const filteredProducts =
    filter === "All"
      ? products
      : products.filter((p) => p.category === filter);

  return (
    <div>
      <Navbar setPage={setPage} cart={cart} />

      {/* Hero */}
      <div className="hero">
        <h1>Trendy Fashion Store</h1>
        <p>Upgrade your style today 👗</p>
      </div>

      {/* Filter */}
      <div className="filters">
        <button onClick={() => setFilter("All")}>All</button>
        <button onClick={() => setFilter("Men")}>Men</button>
        <button onClick={() => setFilter("Women")}>Women</button>
      </div>

      {/* Products */}
      <div className="products">
        {filteredProducts.map((p) => (
          <ProductCard key={p.id} product={p} addToCart={addToCart} />
        ))}
      </div>
    </div>
  );
};

export default Home;