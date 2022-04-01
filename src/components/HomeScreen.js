import React, { useState } from 'react'
import { Container } from './Container'
import { ImageContext } from './ImageContext'

export const HomeScreen = () => {

    // console.log(process.env.REACT_APP_BACKEND_URL);
    return (
        <div className="main">
            <Container />
        </div>
    )
}