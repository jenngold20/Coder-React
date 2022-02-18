import React, { useContext } from "react";
import carrito from "./carrito.png"
import { contexto } from "../../Context/CartContext"

const CartWidget = () => {
	const { CartItems } = useContext(contexto)

    return (
        <div className="carritoimg">
            <img src={carrito} alt="carrito"/><p>{CartItems}</p>
        </div>

    )

}


export default CartWidget
