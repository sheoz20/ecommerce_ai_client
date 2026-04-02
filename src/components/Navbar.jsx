import React from "react";

const Navbar = ({ setPage, cart }) => {
  return (
    <nav className="navbar">
      <h2 onClick={() => setPage("home")}>FASHION HUB</h2>
      <div>
        <span onClick={() => setPage("home")}>Home</span>
        <span onClick={() => setPage("cart")}>Cart ({cart.length})</span>
      </div>
    </nav>
  );
};

export default Navbar;