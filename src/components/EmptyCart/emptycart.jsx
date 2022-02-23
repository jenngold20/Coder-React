import { AttentionSeeker, Slide } from "react-awesome-reveal"
import { NavLink } from "react-router-dom"
import empty from "./empty.png"
import "./empty.css";


function CartEmpty() {
	return (
        <div className="carritoCard">
		
			<AttentionSeeker effect="shake" triggerOnce="true" delay={2000}>
				<br />
				<h1 className="emptyCart">El carrito está vacío</h1>
			</AttentionSeeker>
            <NavLink to='/' className="boton1">Ver productos </NavLink> <br />

			<Slide damping="0" triggerOnce>
				<br />
				<img src={empty} alt="Carrito vacío"/>
				<br />
			</Slide>
		</div>
	)
}

export default CartEmpty
