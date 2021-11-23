import React from 'react'
import './Header.css'
import { Logo } from '../../UI/Logo/Logo'
import {Navbar} from '../../UI/Navbar/Navbar'
export const Header = () => {
    return (
        <div className="contHeader">
            <Logo/>
            <Navbar/>
        </div>
    )
}
