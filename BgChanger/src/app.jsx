import { useState } from 'preact/hooks'
// import {useState} from "react"
// import preactLogo from './assets/preact.svg'
// import viteLogo from '/vite.svg'
// import './app.css'

export function App() {
  const [color,setColor] = useState("olive")

  return (
    <div className='w-full h-screen duration-200' style={{backgroundColor: color}}>
       <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-3 rounded-3xl'>
          <button onClick={() => setColor("red")}
            className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-white shadow-lg' style={{ backgroundColor: "red" }}>Red</button>
          <button onClick={()=> setColor("green")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-white shadow-lg' style={{backgroundColor: "green"}}>Green</button>
          <button onClick={() => setColor("blue")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-white shadow-lg' style={{backgroundColor: "blue"}}>Blue</button>
          <button onClick={() => setColor("yellow")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-black shadow-lg' style={{backgroundColor: "yellow"}}>Yellow</button>
          <button onClick={() => setColor("pink")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-black shadow-lg' style={{backgroundColor: "pink"}}>Pink</button>
          <button onClick={() => setColor("lavender")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-black shadow-lg' style={{backgroundColor: "lavender"}}>Lavender</button> 
          <button onClick={() => setColor("skyblue")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-black shadow-lg' style={{backgroundColor: "skyblue"}}>SkyBlue</button>
          <button onClick={() => setColor("brown")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-white shadow-lg' style={{backgroundColor: "brown"}}>Brown</button> 
          <button onClick={() => setColor("gray")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-black px-4 py-1 rounded-full cursor-pointer text-white shadow-lg' style={{backgroundColor: "gray"}}>Gray</button> 
          <button onClick={() => setColor("black")}
           className='outline-none focus:outline-none hover:ring-2 hover:ring-white px-4 py-1 rounded-full cursor-pointer text-white shadow-lg' style={{backgroundColor: "black"}}>Black</button> 
        </div>
       </div>
    </div>
  )
}
