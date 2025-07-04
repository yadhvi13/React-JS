import { useState } from 'react'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "yogeeta",
    age: 21
  }
  let newarr = [1,2,3]

  return (
    <>
     <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4 w-[18rem]'>Tailwind Test</h1>

     {/* the props is empty, so it should be like this channel */}
     {/* <Card channel= "yogeeta" someObject= {myObj} />  */}
     {/* <Card channel="yogeeta" someObj = {newarr}/>  */}
     <Card userName="yogeeta"/> 
     <Card/>

    </>
  )
}

export default App
