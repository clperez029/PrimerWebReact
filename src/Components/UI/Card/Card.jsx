import React from 'react'
import ImgLobo from '../../../Img/Img-Lobo.jpg'
import './Card.css'
export const Card = () => {
    return (
        <>
            <div className="card">
                <img className="img-card" src={ImgLobo} alt="Lobo"/>
                <h2 className="title">Hola Grupo</h2>
            </div>
        </>
    )
}



