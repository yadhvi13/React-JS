import { createContext, useContext } from "react";

export const TodoContext = createContext({
    //property
    todos: [
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    //functions 
    addTodo: (todo) => {},
    updateTodo: (id,todo) =>{},
    deleteTodo: (id) => {},
    toggleComplete: (id)=> {}
})



export const useTodo = () =>{
    return useContext(TodoContext)
}

export  const Todoprovider = TodoContext.Provider