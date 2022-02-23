import React, { useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import Loader from "../Loader/Loader";


export default function ItemDetail({ item, onAdd, added }) {

    
    return (
        <>
            {item ? (
                <div className="producto-Card">
                <div className="imgContainer">
                        <img  src={item.image} alt="Imagen del producto" />
                    </div>
                    <div>
                        <div className="titulo"> <h4>{item.title}</h4></div>
                        <p>Salida al mercado en el año: {item.description}</p>
                        <p >Su valor es de $ {item.price}</p>
                        <div>
                        {added ? <Link to='/cart' className="IrAlCarrito">Ir al carrito 🛒 </Link> : <ItemCount id={item.id} stock={item.stock} initial={1} onAdd={onAdd} /> }
                        <Link to='/' className="seguirComprando">Seguir mirando 👀 </Link>
                        </div>
                    </div>
                </div>
            ) : (
                <Loader />
            )
            }
        </>
    );
}