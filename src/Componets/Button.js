import React from "react"; 


const Button = ({buttonText, buttonColor, children}) =>{

   //  props.buttonText = "Banana" // error
   // console.log("props",obj.buttonText) // object
   //props =  {buttonText: "Mango", buttonColor: "red"}
   
   return(
      <div>
         <button style={{color: buttonColor}}> {buttonText} </button>
         {children}
      </div>
   )
}



export default Button;


// return(
//    <div style={{backgroundColor: props.buttonColor}}>
//      <button > {props.buttonText}  </button>
//         {props.children}
//    </div>
// )



// let arr = [10,20,30]

// let a = arr[0]
// let b = arr[1]
// let c = arr[2]

// let [a,,c] = arr

// console.log(a,c)


let obj = {name: "Virat", age: 32, country: "India"}

// let name = obj.name
// let age = obj.age
// let country = obj.country

let {age, name,country} = obj

console.log(name,age,country)

