import React, {useState} from 'react';
import { useTodo } from '../contexts';


function TodoForm() {
  const [todo, setTodo]=useState("");
  const {addTodo}=useTodo();

  const add=(e)=>{
    e.preventDefault();

    if(!todo) return;

    addTodo({todo, completed: false})
    setTodo("")
  }
  return (
    <form onSubmit={add} className="flex items-center gap-2">
      <input
        type="text"
        placeholder="Add a new task..."
        className="flex-1 px-3 py-2 border text-white border-gray-300 rounded-md outline-none focus:ring-2 focus:ring-green-400"
        value={todo}
        onChange={(e)=> setTodo(e.target.value)}
      />

      <button
        type="submit"
        className="px-4 py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition"
      >
        Add
      </button>
    </form>
  );
}

export default TodoForm;