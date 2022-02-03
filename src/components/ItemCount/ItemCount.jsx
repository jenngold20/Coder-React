import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
const [counter, setCounter] = useState(initial);

const sumar = () => {
    if (counter < stock) {
    setCounter(counter + 1);
    }
};

const restar = () => {
    if (counter > initial) {
    setCounter(counter - 1);
    }
};

return (
    <div className="counter">
    <div>
        <button className="botonRestar" onClick={() => restar()}>
        -
        </button>
        {counter}
        <button className="botonSumar" onClick={() => sumar()}>
        +
        </button>
    </div>
    <button className="agregarAlCarrito"  onClick={() => onAdd(counter)}> Agregar al carrito</button>
    </div>
);
};

export default ItemCount;
