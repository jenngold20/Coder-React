import React, { useContext, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { contexto } from "../../Context/CartContext";
import { getFirestore } from "../../Firebase/firebase";
import firebase from "firebase/app";
import "./Cart.css";

const Cart = () => {
  const { cart, removeItem, clear, totalCarrito } = useContext(contexto);
  const [total, setTotal] = useState(0);

  const [orderId, setOrderId] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  useEffect(() => {
    setTotal(totalCarrito());
  }, [totalCarrito]);

  const terminarCompra = () => {
    const db = getFirestore();
    const orders = db.collection("orders");

    const miOrden = {
      buyer: {
        name: nameRef.current.value,
        mobile: mobileRef.current.value,
        email: emailRef.current.value,
      },
      items: cart,
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    orders
      .add(miOrden)
      .then(({ id }) => {
        console.log("Orden ingresada: " + id);
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      });
  };



  return (
    <>
      {cart.length === 0 ? (
        <>
          <h2>Carrito vacío...</h2>
          <h1>
            <NavLink to="/" className="VerItems">Ver productos</NavLink>
          </h1>
        </>
      ) : (
        <div  className="cartCard">
          <h1>Total a pagar: $ {total}</h1>
          {cart.map((i) => (
            <div key={i.id} className="cardProducto">
              <div >
                <img src={i.item.image} alt="" className="imgCarrito"  />
              </div>
              <div className="descripcionCarrito">
                <h4>{i.title}</h4>
                <p>Cantidad: {i.count}</p>
                <p>Total: $ {i.item.price * i.count}</p>
              </div>
              <div  className="boton">
                <button className="eliminar"
                  onClick={() => removeItem(i.item.id)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          ))}
          <button  className="vaciarCarrito" onClick={() => clear()}>
            Vaciar carrito
          </button>
        </div>
        
      )}
      <div className="completaTusDatos">
            <h2>Completa tus datos:</h2>

            <input
              type="text"
              name="name"
              ref={nameRef}
              placeholder="Nombre completo"
              className="form"
            />

            <input
              type="text"
              name="mobile"
              ref={mobileRef}
              placeholder="Número de celular"
              className="form"
            />

            <input
              type="text"
              name="email"
              ref={emailRef}
              placeholder="Correo electrónico"
              className="form"
            />

            <button onClick={() => terminarCompra()} className="comprar">
              ¡Comprar!
            </button>
          </div>
          <h2> Tu número de orden es: {orderId}</h2>
    </>
  );
};

export default Cart;