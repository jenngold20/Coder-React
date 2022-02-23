import React from "react";
import { Link } from 'react-router-dom';
import "./Item.css";


const Item = ({item}) => {
  return (
    <div className="item-Card">
      <div className="contenedorImg">
        <img src={item.image} alt="#" className="imagen" />
      </div>
      <div className="datos-item">
        <h4>{item.title}</h4>
        <h4>$ {item.price}</h4>
        <Link to={`/detalle/${item.id}`} className="detalle">
          Ver detalle  
        </Link>
      </div>
      </div>
      );
    }
export default Item
