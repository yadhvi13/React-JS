// the first line useState is hooks
import { useState } from 'react';
import './App.css'

function App() {

 let [counter,setCounter] =  useState(5)

  // let counter = 5
  
  const addValue = () =>{
    // console.log("clicked", counter);
    // counter = counter +1   
    if(counter < 20)
     setCounter(counter + 1)
  }
  const removeValue = () =>{
    // console.log("clicked", counter);
    // counter = counter +1  
    if(counter>0) 
     setCounter(counter - 1)
  }

  return (
    <>
    <body style={{backgroundColor : 'yellow'}}>
      <div style={{backgroundColor: 'red', padding: '20px', borderRadius: '50px'}}>
      <h1 style={{color: "white"}}>Hello duniyaaa</h1>
      <h2 style={{color: "white"}}>Counter Value : {counter}</h2>

      {/* <button
      onClick={addValue}>Add Value {counter}</button>
      <br />
      <button
      onClick={removeValue}> Decrease Value {counter}</button>
    */}
     <button
      onClick={addValue} style={{}}>Add Value </button>
      <br />
      <button
      onClick={removeValue} style={{marginTop: '10px'}}> Decrease Value </button>
  
    </div>  
    </body>
    
    </>
  )
}

export default App
