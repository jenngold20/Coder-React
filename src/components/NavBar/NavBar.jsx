import React from "react";
import './NavBar.css'
import CartWidget from '../CartWidget/CartWidget'
import { NavLink } from "react-router-dom";
import logo from "./logo.png"



const NavBar = () => {
	return (
		<>

<div className="navbar">
    <NavLink to="/">
    <img src={logo} alt="logo"/>
    </NavLink>
    <ul className="navLinks">
        <li>
        <NavLink
            to="/"
            className="navLink"
            activeClassName="currentCategory"
        >
            Productos
        </NavLink>
        </li>
        <li>
        <NavLink
            to="/category/Barbie"
            className="navLink"
            activeClassName="currentCategory"
        >
            Barbie
        </NavLink>
        </li>
        <li>
        <NavLink
            to="/category/Ken"
            className="navLink"
            activeClassName="currentCategory"
        >
        Ken
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
