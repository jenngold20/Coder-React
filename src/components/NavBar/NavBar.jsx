import React from "react";
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom";



const NavBar = () => {
	return (
		<>

<div className="navbar">
    <NavLink to="/">
        <h1>Barbie Collector</h1>
    </NavLink>
    <ul className="navLinks">
        <li>
        <NavLink
            to="/category/productos"
            className="navLink"
            activeClassName="currentCategory"
        >
            Productos
        </NavLink>
        </li>
        <li>
        <NavLink
            to="/category/Novedades"
            className="navLink"
            activeClassName="currentCategory"
        >
            Novedades
        </NavLink>
        </li>
        <li>
        <NavLink
            to="/category/Nosotros"
            className="navLink"
            activeClassName="currentCategory"
        >
        Nosotros
    </NavLink>
        </li>
        <li>
        <NavLink
            to="/cart"
            className="navLink"
            activeClassName="currentCategory"
        >
            <CartWidget />
        </NavLink>
        </li>
    </ul>
    </div>
		</>
	)
}

export default NavBar
