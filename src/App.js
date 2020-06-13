import React, { useState } from 'react'
import "./App.css"

export default function App() {

    let [isLit, setLit] = useState("On")
    let [Temp , SetTemp] = useState(22);

    const Inc = () => {
        SetTemp (Temp + 1)
    }
    const Dec = () => {
        SetTemp (Temp - 1)
    }

    return (
        <div className={`room ${isLit}`}>
            <p> The lights are {isLit} </p>
            <button className="on" onClick={() => { setLit(isLit = "ON") }}>
                Turn ON
            </button>

            &nbsp;
            
            <button className="off" onClick={() => { setLit(isLit = "OFF") }}>
                Turn OFF
            </button>

            <h2> Temperature </h2>
            <p> Initial Temperature: {Temp} </p>  
            <button onClick={Inc}>+ </button> &nbsp;
            <button onClick={Dec}>- </button> 

        </div>

    )
}
