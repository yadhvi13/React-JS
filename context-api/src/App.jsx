import { useEffect, useState } from 'react'
import { Todoprovider } from './contexts'
import TodoForm from './components/TodoForm'
import TodoItem from './components/TodoItem'

function App() {
  //todos is an array
  const [todos, setTodos] = useState([])

  const addTodo = (todo)=> {
    // old values ko spread operator ke through lena
   setTodos((prev) => [{id: Date.now(), ...todo},...prev])
  }

  const updateTodo = (id,todo) => {
    setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo )))
//-------OR-------
    // prev.map((eachval) => {
    //   if(eachval.id === id){
    //     todo
    //   }
    // else{

    // }
    // })
  }

  const deleteTodo = (id) => {
     setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map((prevTodo) => prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed} : prevTodo))
  }

  useEffect(() => {
    const todos =  JSON.parse( localStorage.getItem("todos"))

    if(todos && todos.length > 0){
      setTodos(todos)
    }
  }, [])


   useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos))
   }, [todos])

  return (
    <Todoprovider value={{todos,updateTodo,addTodo,deleteTodo,toggleComplete}}>
      <div className="bg-[#172842] min-h-screen py-8">
                <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
                    <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
                    <div className="mb-4">
                        {/* Todo form goes here */} 
                        <TodoForm/>
                    </div>

                    <div className="flex flex-wrap gap-y-3">
                        {/*Loop and Add TodoItem here */}
                      {todos.map((todo) => (
                        <div key={todo.id} className='w-full'>
                            <TodoItem todo={todo}/>
                        </div>
                      ))} 
                    </div>
                </div>
            </div>
    </Todoprovider>
  )
}

export default App
