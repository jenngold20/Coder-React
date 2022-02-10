import React, { useContext, useEffect, useState } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { contexto } from "../../Context/CartContext";

const Cart = () => {
  const { cart, removeItem, clear, totalCarrito } = useContext(contexto);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    setTotal(totalCarrito());
  }, [totalCarrito]);

  return (
    <>
      {cart.length === 0 ? (
        <>
          <h2>Carrito vacío...</h2>
          <h1>
            <NavLink to="/">Ver productos</NavLink>
          </h1>
        </>
      ) : (
        <div>
          <h1>Total a pagar: $ {total}</h1>
          {cart.map((i) => (
            <div key={i.id} >
              <div >
                <img src={i.image} alt=""  />
              </div>
              <div>
                <h4>{i.title}</h4>
                <p>Cantidad: {i.cantidad}</p>
                <p>Total: $ {i.price * i.cantidad}</p>
              </div>
              <div>
                <button
                  onClick={() => removeItem(i.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <button onClick={() => clear()}>
            Carrito vacío
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;