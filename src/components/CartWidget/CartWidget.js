import React from 'react'
import carrito from "./carrito.png"

const CartWidget = () => {
    
    return (
        <div className="carritoimg">
            <img src={carrito} alt="carrito"/><p>0</p>
        </div>
    )
}

export default CartWidget
