import React from "react";

const Navbar = ({ setPage, cart }) => {
  const cartCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <nav className="navbar">
      <h2 onClick={() => setPage("home")}>🛍️ FASHION HUB</h2>
      <div className="nav-links">
        <span onClick={() => setPage("home")}>🏠 Home</span>
        <span onClick={() => setPage("cart")}>
          🛒 Cart 
          {cartCount > 0 && <span className="cart-badge">{cartCount}</span>}
        </span>
      </div>
    </nav>
  );
};

export default Navbar;