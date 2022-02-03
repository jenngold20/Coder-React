import React from "react";
import { Link } from 'react-router-dom';
import "./Item.css";


const Item = ({data}) => {
  return (
    <div className="item-Card">
      <div className="contenedorImg">
        <img src={data.imagen} alt="#" className="imagen" />
      </div>
      <div className="descItem">
        <h4>{data.titulo}</h4>
        <h4>$ {data.precio}</h4>
        <Link to={`/detalle/${data.id}`} className="detalle">
          Ver detalle
        </Link>
      </div>
      </div>
      );
    }
export default Item
