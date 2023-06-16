/* eslint-disable react/no-unescaped-entities */
import React from "react";
import "./styles.css";

const Header = ({ logo, menuItem }) => {
    return (
        <header className="header">
            <a href="/" className="logo">
                {logo}
            </a>
            <input type="checkbox" className="side-menu" id="side-menu" />
            <label className="hamburger" htmlFor="side-menu">
                <span className="hamburger-item"></span>
            </label>
            <nav className="navbar">
                <ul className="menu">
                    <li>
                        <a href="#">Productos</a>
                    </li>
                    <li>
                        <a href="#">Contactos</a>
                    </li>
                    <li>
                        <a href="#">Sobre nosotros</a>
                    </li>
                    <li>
                        <a href="#">Carrito</a>
                    </li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;
