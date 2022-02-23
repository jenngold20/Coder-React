import React, { createContext, useState } from "react";

export const contexto = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addToCart = (producto, count) => {
    if (isInCart(producto.id)) {
      
      const indexItem = cart.findIndex((e) => e.item.id === producto.id);
      cart[indexItem].count = cart[indexItem].count + count;
      setCart([...cart]);
    } else {
      setCart([...cart, {item: producto, count }]);
    }
  };

  const isInCart = (id) => {
    return cart.some(element => element.item.id === id)
  }

  const removeItem = (id) => {
    const carritoActualizado = cart.filter((element) => element.item.id !== id);
    setCart(carritoActualizado);
  };

  const clear = () => {
    setCart([]);
  };

  const totalCarrito = () => {
    return cart
      .map((item) => item.item.price * item.count)
      .reduce((a, valor) => a + valor, 0)
  };

  const CartItems = () => {
    return cart.reduce((a, b) => a + b.count,0);
  };

  return (
    <contexto.Provider
      value={{ cart, addToCart, removeItem, clear, totalCarrito, CartItems }}>
      {children}
    </contexto.Provider>
  );
};

export default CartContext;