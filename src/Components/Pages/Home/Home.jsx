import React from 'react'
import './Home.css'
import { Header } from '../../Layouts/Header/Header'
import {Presentation} from '../../Layouts/Presentation/Presentation'
import { Footer } from '../../Layouts/Footer/Footer'
export const Home = () => {
    return (
        <div className="contHome">
            <Header/>
            <Presentation/>
            <Footer/>
        </div>
    )
}
