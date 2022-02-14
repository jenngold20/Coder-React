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
                        <h4>{item.title}</h4>
                        <p>{item.description}</p>
                        <p >$ {item.price}</p>
                        <div>
                        {added ? <Link to='/cart'>Ir Al Carrito</Link> : <ItemCount id={item.id} stock={item.stock} initial={1} onAdd={onAdd} /> }

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