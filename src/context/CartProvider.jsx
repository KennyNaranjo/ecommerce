import { useState } from 'react';
import { CartContext } from './CartContext';

function CartProvider({ children }) {
  const [cart, setCart] = useState([]);

  const updateCart = (toy) => {
    setCart([...cart, toy]);
  };

  const removeFromCart = (updatedCart) => {
    setCart(updatedCart);
  };

  return (
    <CartContext.Provider value={{ cart, updateCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
