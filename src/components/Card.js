import React from "react";
import image from  "D:/Aprender react/practica2/src/images/katie-zaferes.png";
import star from  "D:/Aprender react/practica2/src/images/star.png";
export default function Card(){
    return(
        <div className="card">
            <img src={image} className="card--image" alt="katie"/>
            <div className="card--stats">
                <img src={star} className="card--star" alt="star"/>
                <span>5.0</span>
                <span className="gray">(6) •</span>
                <span className="gray">USA</span>
            </div>
            
            <p className="card--tittle">Life lessons with Katie Zaferes</p>
            <p className="card--cost"><span className="bold">From $136</span>/person</p>
        </div>
    )
}