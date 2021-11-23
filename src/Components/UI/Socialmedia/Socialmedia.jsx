import React from "react";
import WhatsApp from '../../../Img/SocialMedia/whatsapplogo.png'
import Instagram from '../../../Img/SocialMedia/instagram.png'
import Facebook from '../../../Img/SocialMedia/facebook.png'
import Twitter from '../../../Img/SocialMedia/twitter.png'
import './Socialmedia.css';

export const Socialmedia = () => {
    return (
        <div className="cont-social-media">
            <div className="social">
                <img src={WhatsApp} alt="WhatsApp" />
                <span>WhatsApp</span>
            </div>
            <div className="social">
                <img src={Instagram} alt="Instagram" />
                <span>Instagram</span>
            </div>
            <div className="social">
                <img src={Facebook} alt="Facebook" />
                <span>Facebook</span>
            </div>
            <div className="social">
                <img src={Twitter} alt="Twitter" />
                <span>Twitter</span>
            </div>
        </div>
    )
}
