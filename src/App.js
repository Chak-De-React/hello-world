import React from 'react'
import Button from "./Componets/Button"

let obj = {color: "tomato", textAlign:"center"}
// JSX 
const App = ()=>{
    let a = 10
    let b = 5
    return (
        <div>
           <h1 className="heading">Hello World</h1>
           <h1 style={obj}>value of a = {a}</h1>
            <p> {a+b} </p>
            <p>Hello how are you</p>

            <Button />
            <Button />
            <Button />
            
        </div>
    )
}

export default App

// Modules in javascript