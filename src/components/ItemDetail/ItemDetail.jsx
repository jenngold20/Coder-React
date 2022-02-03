import React, { useState, useContext } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { contexto } from "../../Context/CartContext";


const ItemDetail = ({ item }) => {
    const [irAlCarrito, setIrAlCarrito] = useState(false);
    const { addItem } = useContext(contexto);

    const onAdd = (cantidad) => {
        addItem(item, cantidad);
        setIrAlCarrito(true);
    };

return (
    <div className="producto-Card">
    <div className="imgContainer">
    <h2>{item.titulo}</h2>
        <img src={item.imagen} alt="productImg" className="img" />
    </div>
    <div className="descriptionContainer">
        
        <p>{item.year}</p>
        <h1>$ {item.precio}</h1>
        <div>
        {irAlCarrito ? (
            <Link to="/cart" className="verCarrito">
            Ver carrito
            </Link>
        ) : (
            <ItemCount stock={5} initial={1} onAdd={onAdd} /> )}
    </div>
    </div> </div>
);
};

export default ItemDetail;