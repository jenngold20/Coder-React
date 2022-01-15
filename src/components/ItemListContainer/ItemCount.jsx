import React, { useState } from "react";
import { Button } from "react-bootstrap";

export default function ItemCount(props) {
const [count, setCount] = useState(props.stock > 0 ? 1 : props.initial);

return (
    <>
    <div style={{ width: "200px" }}>
        <div className="d-flex flex-row justify-content-between">
        <Button
            disabled={count < 1}
            onClick={() => {
            setCount(count - 1);
            }}
        >
            -
        </Button>
        <div>{count}</div>
        <Button
            disabled={count >= props.stock}
            onClick={() => {
            setCount(count + 1);
            }}
        >
            +
        </Button>
        </div>
        <div className="d-flex justify-content-center">
        <Button variant="outline-primary" onClick={() => props.onAdd()}>
            Agregar al carrito
        </Button>
        </div>
    </div>
    </>
);
}
