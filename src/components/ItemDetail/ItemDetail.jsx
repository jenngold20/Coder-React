import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";


export default function ItemDetail({ item }) {

    const [VoyAlCarrito, setVoyAlCarrito] = useState(false);
    console.log(item);
    return (
        <>
            {item ? (
                <div className="producto-Card">
                <div className="imgContainer">
                        <img  src={item.imagen} alt="Imagen del producto" />
                    </div>
                    <div>
                        <h4>{item.titulo}</h4>
                        <p>{item.year}</p>
                        <p >$ {item.precio}</p>
                        {
                            !VoyAlCarrito &&
                            <ItemCount id={item.id} stock={item.stock} initial={1} onAdd={setVoyAlCarrito} ></ItemCount>
                        }
                        <div>
                                <Link to={`/cart`} className="irCarrito">
                                    Ir al carrito
                                </Link>

                        </div>
                    </div>
                </div>
            ) : (
                <div>Cargando detalle</div>
            )
            }
        </>
    );
}