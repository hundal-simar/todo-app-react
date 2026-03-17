import { TodoProvider } from "./contexts"
import {useState, useEffect} from "react"
import TodoForm from "./components/TodoForm"
import TodoItem from "./components/TodoItem"

function App() {
  const [todos, setTodos]=useState([])

  const addTodo=(todo)=>{
    setTodos((prev)=> [{id:Date.now(),...todo}, ...prev])
  }

  const updateTodo=(id,todo)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id===id ? todo:prevTodo))
  }

  const deleteTodo=(id)=>{
    setTodos((prev)=> prev.filter((prevTodo)=> prevTodo.id!==id))
  }

  const toggleComplete=(id)=>{
    setTodos((prev=> prev.map((prevTodos)=> prevTodos.id===id? {...prevTodos,completed: !prevTodos.completed} : prevTodos)))
  }

  useEffect(()=>{
    
    const todos=JSON.parse(localStorage.getItem("todos"))

    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos))
  },[todos])
  
  return (
    
    
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
      <div className="bg-slate-900 min-h-screen py-10">
         <div className="w-full max-w-2xl mx-auto bg-slate-800 shadow-lg rounded-lg px-6 py-5 text-white">
    
            <h1 className="text-2xl font-semibold text-center mb-6">
            My Todo List
            </h1>

              <div className="mb-5">
              <TodoForm />
              </div>

             <div className="flex flex-col gap-3">
             {todos.map((todo)=>(
              <div key={todo.id} className="w-full">
                <TodoItem todo={todo} />
              </div>
             ))

             }
             </div>

          </div>
         </div>
        </TodoProvider>
  )
}

export default App