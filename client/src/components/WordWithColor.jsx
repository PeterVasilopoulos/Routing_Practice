import React from 'react'
import { useParams } from 'react-router-dom'

const WordWithColor = () => {
    const {word, color, bcolor} = useParams();
    
    return (
        <div>
            <h1 style={{color:color, backgroundColor:bcolor}}>The word is: {word}</h1>
        </div>
    )
}

export default WordWithColor