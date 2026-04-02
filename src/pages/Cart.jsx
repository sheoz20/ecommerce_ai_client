import React from "react";
import Navbar from "../components/Navbar";

const Cart = ({ setPage, cart, setCart }) => {
  const removeItem = (productId) => {
    setCart(cart.filter(item => item._id !== productId));
  };

  const updateQuantity = (productId, newQuantity) => {
    if (newQuantity <= 0) {
      removeItem(productId);
    } else {
      setCart(cart.map(item => 
        item._id === productId 
          ? { ...item, quantity: newQuantity }
          : item
      ));
    }
  };

  const total = cart.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <div>
      <Navbar setPage={setPage} cart={cart} />

      <div className="cart-container">
        <h2 className="cart-title">🛒 Your Shopping Cart</h2>

        {cart.length === 0 ? (
          <div className="cart-empty">
            <h3>Your cart is empty</h3>
            <p>Add some products to get started!</p>
            <button onClick={() => setPage("home")}>
              Continue Shopping
            </button>
          </div>
        ) : (
          <>
            {cart.map((item) => (
              <div className="cart-item" key={item._id}>
                <div className="cart-item-info">
                  <h4>{item.name}</h4>
                  <p>₹{item.price} x {item.quantity}</p>
                  <div style={{ marginTop: '0.5rem' }}>
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity - 1)}
                      style={{ 
                        padding: '0.2rem 0.5rem', 
                        marginRight: '0.5rem',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      -
                    </button>
                    <span>{item.quantity}</span>
                    <button 
                      onClick={() => updateQuantity(item._id, item.quantity + 1)}
                      style={{ 
                        padding: '0.2rem 0.5rem', 
                        marginLeft: '0.5rem',
                        background: '#667eea',
                        color: 'white',
                        border: 'none',
                        borderRadius: '5px',
                        cursor: 'pointer'
                      }}
                    >
                      +
                    </button>
                  </div>
                </div>
                <button onClick={() => removeItem(item._id)}>
                  Remove
                </button>
              </div>
            ))}

            <div className="cart-total">
              Total ({itemCount} items): ₹{total}
            </div>
          </>
        )}
      </div>
    </div>
  );
};

export default Cart;