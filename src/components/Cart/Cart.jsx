import React, { useContext } from "react";
import { contexto } from "../../Context/CartContext";

const Cart = () => {
  const { cart, removeItem, clear } = useContext(contexto);

  return (
    <>
      {cart.length === 0 ? (
        <h1>Tu carrito está vacío</h1>
      ) : (
        <div className="cartCard">
          {cart.map((i) => (
            <div key={i.item.id} className="cardProducto">
              <div className="imgCart">
                <img src={i.item.imagen} alt="" className="imgCarrito" />
              </div>
              <div className="descripcion">
                <h4>{i.item.titulo}</h4>
                <p>Cantidad: {i.cantidad}</p>
              </div>
              <div className="boton">
                <button
                  className="botonEliminar"
                  onClick={() => removeItem(i.item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <button className="vaciarCarrito" onClick={() => clear()}>
            Vaciar Carrito
          </button>
        </div>
      )}
    </>
  );
};

export default Cart;