import React from 'react'
import carrito from "./carrito.png"

const CartWidget = () => {
    return (
        <div className="carritoimg">
            <img src={carrito} alt="carrito"/><p>1</p>
        </div>
    )
}

export default CartWidget
