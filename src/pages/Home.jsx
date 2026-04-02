import React, { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import ProductCard from "../components/ProductCard";
import { getProducts } from "../services/api";

const Home = ({ setPage, cart, setCart }) => {
  const [filter, setFilter] = useState("All");
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  // Fetch products from backend API
  useEffect(() => {
    const fetchProducts = async () => {
      try {
        setLoading(true);
        const data = await getProducts(filter);
        setProducts(data.data);
        setError(null);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, [filter]);

  const addToCart = (product) => {
    const existingItem = cart.find(item => item._id === product._id);
    
    if (existingItem) {
      setCart(cart.map(item => 
        item._id === product._id 
          ? { ...item, quantity: item.quantity + 1 }
          : item
      ));
    } else {
      setCart([...cart, { ...product, quantity: 1 }]);
    }
  };

  const categories = ["All", "Men", "Women"];

  return (
    <div>
      <Navbar setPage={setPage} cart={cart} />

      {/* Hero */}
      <div className="hero">
        <h1>✨ Trendy Fashion Store</h1>
        <p>Discover the latest styles and upgrade your wardrobe today</p>
      </div>

      {/* Filter */}
      <div className="filters">
        {categories.map((cat) => (
          <button
            key={cat}
            className={filter === cat ? "active" : ""}
            onClick={() => setFilter(cat)}
          >
            {cat}
          </button>
        ))}
      </div>

      {/* Loading State */}
      {loading && (
        <div className="loading">
          <h3>Loading products...</h3>
        </div>
      )}

      {/* Error State */}
      {error && (
        <div className="error">
          <h3>Error: {error}</h3>
          <p>Please make sure the backend server is running on port 5000</p>
        </div>
      )}

      {/* Products */}
      {!loading && !error && (
        <div className="products">
          {products.map((product) => (
            <ProductCard 
              key={product._id} 
              product={product} 
              addToCart={addToCart} 
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Home;