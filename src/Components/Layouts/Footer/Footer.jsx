import React from "react";
import './Footer.css';
import { Socialmedia } from "../../UI/Socialmedia/Socialmedia";
import { Credits } from "../../UI/Credits/Credits";

export const Footer = () => {
    return (
        <div className="cont-footer">
            <Socialmedia/>
            <Credits/>
        </div>
    )
}
