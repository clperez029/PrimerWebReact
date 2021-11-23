import React from 'react'
import './Presentation.css'
import { Welcome } from '../../UI/Welcome/Welcome'
import { Features } from '../../UI/Features/Features'
import { Detail } from '../../UI/Detail/Detail'
import { Card } from '../../UI/Card/Card'


export const Presentation = () => {
    return (
        <div className="contPresentation">
            <Welcome/>
            <Features/>
            <Detail/>
            <Card/>
        </div>
    )
}
