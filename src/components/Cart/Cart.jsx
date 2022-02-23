import React, { useContext, useEffect, useState, useRef } from "react";
import { NavLink } from "react-router-dom/cjs/react-router-dom.min";
import { contexto } from "../../Context/CartContext";
import { getFirestore } from "../../Firebase/firebase";
import firebase from "firebase/app";
import "./Cart.css";
import mpago from "./mpago.png"
import CartEmpty from "./../EmptyCart/emptycart"


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

  const terminarCompra = (e) => {
    e.preventDefault();
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
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      })
    .finally(() => {
        clear();
      });
  };



  return (
    <div className="margenes">
    {orderId && (
      <div className="carritoCard">
        <h2> Compra realizada con éxito.</h2> <p>Tu orden de compra es: {orderId}</p>
      </div>
    )}
      {cart.length === 0 ? (
        <>
          <CartEmpty />
        </>
      ) : (
        <>
        <div  className="carritoCard">
          <h1>Total a pagar: $ {total}</h1>
          {cart.map((i) => (
            <div key={i.id} className="ordenProd">
              <div >
                <img src={i.item.image} alt="" className="imgCarrito"  />
              </div>
              <div className="descripcionCarrito">
                <h4>{i.title}</h4>
                <p>Cantidad: {i.count}</p>
                <p>Total: $ {i.item.price * i.count}</p>
              </div>
                <button className="eliminar"
                  onClick={() => removeItem(i.item.id)}
                >
                  Eliminar 🗑️
                </button>            </div>
          ))}
          <NavLink to='/' className="boton1">Seguir mirando 👀 </NavLink> <br />
          <button  className="boton1" onClick={() => clear()}>
            Vaciar carrito
          </button>
        </div>
        </>
      )}

      <div className="carritoCard">
          <h2>Medios de pago disponibles: </h2>
          <img src={mpago} alt="Medios de Pago" className="mp"/>
      </div>

<div className="carritoCard">
            <form onSubmit={terminarCompra} className="completaTusDatos">
            <h2>Completa tus datos:</h2>

            <input
              type="text"
              name="name"
              ref={nameRef}
              placeholder="Nombre completo"
              className="datoForm"
              required
            />

            <input
              type="text"
              name="mobile"
              ref={mobileRef}
              placeholder="Número de celular"
              className="datoForm"
              required
            />

            <input
              type="text"
              name="email"
              ref={emailRef}
              placeholder="Correo electrónico"
              className="datoForm"
              required
            />

            <button onClick={() => terminarCompra()} className="boton1">
              ¡Comprar!
            </button> </form>
          </div>
          
    </div>
  );
};

export default Cart;