import React from "react";
import Navbar from "../components/Navbar";

const Cart = ({ setPage, cart, setCart }) => {
  const removeItem = (index) => {
    const updated = cart.filter((_, i) => i !== index);
    setCart(updated);
  };

  const total = cart.reduce((sum, item) => sum + item.price, 0);

  return (
    <div>
      <Navbar setPage={setPage} cart={cart} />

      <h2 style={{ textAlign: "center" }}>Your Cart 🛒</h2>

      {cart.map((item, index) => (
        <div className="cart-item" key={index}>
          <span>{item.name}</span>
          <span>₹{item.price}</span>
          <button onClick={() => removeItem(index)}>Remove</button>
        </div>
      ))}

      <h3 style={{ textAlign: "center" }}>Total: ₹{total}</h3>
    </div>
  );
};

export default Cart;