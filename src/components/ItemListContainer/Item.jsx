import React from "react";
import { Button } from "react-bootstrap";

export default function Item(props) {
  return (
    <>
      <div className="item-card">
        <div className="item-header">{props.item.titulo}</div>
        <div className="item-img">
          <img className="img img-fluid" src={props.item.imagen} alt="" />
        </div>
        <div className="item-description">{props.item.descripcion}</div>
        <Button variant="outline-primary" size="sm">
          Información del juego
        </Button>
        <div className="item-price">$ {props.item.precio}</div>
        <div className="item-stock">Stock: {props.item.stock}</div>
      </div>
    </>
  );
}
