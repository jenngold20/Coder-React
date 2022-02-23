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
<div className="nombre">
    <NavLink to="/">
    <h1>   Barbie Collector  ♡</h1>
    </NavLink></div>

    <ul className="lista">
        <li>
        <NavLink
            to="/"
            className="navLink"
        >
            Productos ♡
        </NavLink>
        </li>
        <li>
        <NavLink
            to="/category/Barbie"
            className="navLink"
        >
            Barbie  ♡
        </NavLink>
        </li>
        <li>
        <NavLink
            to="/category/Ken"
            className="navLink"
        >
        Ken  ♡
    </NavLink>
        </li>
        <li>
        <NavLink
            to="/cart"
            className="navLink" 
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
