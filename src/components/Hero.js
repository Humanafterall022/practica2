import React from "react";
import img from  "D:/Aprender react/practica2/src/images/photo-grid.png";
export default function Hero(){
    return(
        <main className="hero">
            <img src={img} className="hero--img" alt="Imagen" />
            <h1 className="hero--tittle">Online Experiences</h1>
            <p className="hero--text">Join unique interactive avtivities led by one of a kind hosts- all without leaving home.</p>
        </main>
    )
}