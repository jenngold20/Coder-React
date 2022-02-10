import React from "react";
import { Link } from 'react-router-dom';
import "./Item.css";


const Item = ({item}) => {
  return (
    <div className="item-Card">
      <div className="contenedorImg">
        <img src={item.imagen} alt="#" className="imagen" />
      </div>
      <div className="descItem">
        <h4>{item.titulo}</h4>
        <h4>$ {item.precio}</h4>
        <Link to={`/detalle/${item.id}`} className="detalle">
          Ver detalle
        </Link>
      </div>
      </div>
      );
    }
export default Item
