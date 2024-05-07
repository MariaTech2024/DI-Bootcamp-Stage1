import React from 'react';
import { useState, useEffect } from 'react';

const Color = () => {
    const [favoriteColor, setFavoriteColor] = useState('red');
   
    useEffect(() => {
        alert("useEffect reached")
        setFavoriteColor("yellow")
    }, []
    );

    return (
        <>
            <h1>My Favorite Color is <em>{favoriteColor}</em></h1>
            <button onClick={()=>setFavoriteColor("blue")}>CLICK</button>
        </>
    )
}
export default Color;