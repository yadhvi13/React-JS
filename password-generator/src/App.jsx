import { useState, useCallback, useEffect, useRef } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'

function App() {
  const [length, setLength] = useState(8)
  const [numberAllowed, setNumberAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState()

  //ref hook
  const passwordRef = useRef(null)

  //password generator method
  const passwordGenerator = useCallback(()=>{
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"
    if (numberAllowed)  {
      //numbers
      str = str + "0123456789"
    }
    if (charAllowed)  {
      //special charcaters
      str = str + "!@#$%^&*+-_={}[]~`"
    }

//for having LOOP
    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random()*str.length + 1) 

      //eventually when loop is finished the value stored at the pass variable declared empty above
      pass += str.charAt(char)
    }
  setPassword(pass)

}, [length,numberAllowed,charAllowed, setPassword])


const copyPasswordToClipBoard = useCallback(()=>{
  passwordRef.current?.select();
  passwordRef.current?.setSelectionRange(0,99);
  window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordGenerator()
}, [length,numberAllowed,charAllowed,passwordGenerator])


  return (
    <>
    <div className='w-[1080px] max-w-md mx-auto shadow-md rounded-lg px-4 py-2 my-8 pb-6 bg-gray-700'>
      <h1 className='text-white text-2xl font-bold text-center py-3 my-3'>Password Generator</h1>
      <div className='flex shadow rounded-lg overflow-hidden mb-4 bg-white'>
        <input
         type="text" 
         value={password}
         className='outline-none w-full py-2 px-3'
         placeholder='password'
         readOnly
         ref={passwordRef}
         />

         <button onClick={copyPasswordToClipBoard}
         className='outline-none cursor-pointer bg-blue-700 hover:bg-blue-300 text-white px-3 py-0.5 shrink-0'>copy</button>
      </div>

      <div className='flex text-sm gap-x-2'>
        <div className='flex items-center gap-x-1'>
          <input 
          type="range"
          min={8}
          max={100}
          value={length}
          className='cursor-pointer'
          onChange={(e)=>{setLength(e.target.value)}}

          />
<label className='text-white'>Length : {length}</label>
        </div>

        <div className='flex items-center gap-x-1 pl-3'>
          <input 
          type="checkbox"
          defaultChecked={numberAllowed}
          id='numberInput'
          onChange={()=>{
            setNumberAllowed((prev)=> !prev);
          }}
 />
 <label className='text-white pl-1' htmlFor='numberInput'>Numbers</label>
        </div>

        <div className='flex items-center gap-x-1 pl-3'>
          <input 
          type="checkbox"
          defaultChecked={charAllowed}
          id='characterInput'
          onChange={()=>{
            setCharAllowed((prev)=> !prev);
          }}
 />
 <label className='text-white pl-1' htmlFor='characterInput'>Characters</label>
        </div> 

      </div>
    </div>
    </>
  )
}

export default App
