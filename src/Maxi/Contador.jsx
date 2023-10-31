import React, { useState } from 'react'



const useContador = ()=>{
    const [number, setNumber] = useState(0);
    console.log('custom hook')
    const up = ()=>{
        setNumber(number + 1)
    }

    const down = ()=>{
        setNumber(number - 1)
    }

    const reset = ()=>{
        setNumber(0)
    }

    return {
        number,
        up,
        down,
        reset,
    }
}



export const Contador = () => {
    console.log('dentro de mi componente')
    const counter = useContador();
    return (
    <>
        <div style={{fontSize:30}}>Contador</div>
        <br/>
        <p>{counter.number}</p>
        <button onClick={counter.up}>+</button>
        <button onClick={counter.down}>-</button>
    </>
    )
}
