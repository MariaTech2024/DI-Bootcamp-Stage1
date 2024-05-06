import React from 'react';
import { useState, useEffect } from 'react';

const Color = (props) => {
    const [favoriteColor, setFavoriteColor] = useState('red')

    useEffect(() => {
        alert('useEffect reached');
        setFavoriteColor('yellow')
    }, [])

    const changeColor = () => {
        setFavoriteColor('blue')
    }

    return (
        <>
            <header> My Favorite Color is {favoriteColor}</header>
            <button onClick={changeColor}>Change Color</button>
        </>
    )
}

export default Color;