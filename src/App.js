import React from 'react'
import Button from "./Componets/Button"

let obj = {color: "tomato", textAlign:"center"}
// JSX 
const App = ()=>{
    let a = 10
    let b = 5
    return (
        <div>
           {/* <h1 className="heading">Hello World</h1>
             
           <h1 style={obj}>value of a = {a}</h1>
            <p> {a+b} </p>
            <p>Hello how are you</p> */}

            <Button 
               buttonText="Mango"
               buttonColor="yellow"
            >
                
            </Button>

            <Button 
               buttonText="Apple"
               buttonColor="green"
            >
                <h1>Hey this is Apple</h1> 
            </Button>

            <Button 
               buttonText="Orange"
               buttonColor="orange"
            />

            <Button
               buttonText="Kiwi"
               buttonColor="tomato"
            >
                <h1 className="heading1">Hey this is Kiwi</h1> 
                <p>I am virat Pet name</p>
            </Button>
            
            
        </div>
    )
}

export default App

// Modules in javascript