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
      .reduce((acum, valor) => acum + valor, 0)
  };

  const totalItemsCart = () => {
    return cart.reduce((acum, producto) => acum + producto.count,0);
  };


  return (
    <contexto.Provider
      value={{ cart, addToCart, removeItem, clear, totalCarrito, totalItemsCart }}>
      {children}
    </contexto.Provider>
  );
};

export default CartContext;