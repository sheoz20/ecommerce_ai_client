import React from "react";

const getProductEmoji = (category) => {
  const emojis = {
    'Men': '👔',
    'Women': '👗',
    'Kids': '🧸',
    'Accessories': '👜',
    'default': '🛍️'
  };
  return emojis[category] || emojis.default;
};

const ProductCard = ({ product, addToCart }) => {
  return (
    <div className="card">
      <div className="card-image">
        {getProductEmoji(product.category)}
      </div>
      <div className="card-content">
        <span className="card-category">{product.category}</span>
        <h3>{product.name}</h3>
        <p className="card-price">₹{product.price}</p>
        <button onClick={() => addToCart(product)}>
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default ProductCard;