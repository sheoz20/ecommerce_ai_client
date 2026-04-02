import React, { useState } from "react";
import Home from "./pages/Home";
import Cart from "./pages/Cart";

function App() {
  const [page, setPage] = useState("home");
  const [cart, setCart] = useState([]);

  return (
    <div>
      {page === "home" && (
        <Home setPage={setPage} cart={cart} setCart={setCart} />
      )}
      {page === "cart" && (
        <Cart setPage={setPage} cart={cart} setCart={setCart} />
      )}
    </div>
  );
}

export default App;