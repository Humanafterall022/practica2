import React from "react"
import logo from "D:/Aprender react/practica2/src/images/airbnb-logo.png";
export default function Navbar() {
    return (
        <nav>
            <img src={logo} className="nav--logo" alt="Imagen" />
        </nav>
    )
}