import {useDispatch} from "react-redux";
import {addTodo} from "../features/todo/todoSlice";
import React,{ useState } from "react";

function AddTodo(){

    const [input, setInput]=useState("");
    const dispatch=useDispatch();

    const addTodoHandler=(e)=>{
        e.preventDefault();
        dispatch(addTodo(input));
        setInput("");
    }
    return(
         <div className="w-full flex justify-center mt-8">
  <form
    onSubmit={addTodoHandler}
    className="w-full max-w-md flex gap-2"
  >
    <input
      type="text"
      placeholder="Enter a Todo..."
      value={input}
      onChange={(e) => setInput(e.target.value)}
      className="flex-1 px-3 py-2 rounded-md border border-gray-300 focus:outline-none focus:ring-2 focus:ring-indigo-400 text-gray-800"
    />

    <button
      type="submit"
      className="px-4 py-2 bg-indigo-500 hover:bg-indigo-600 text-white rounded-md transition"
    >
      Add
    </button>
  </form>
</div>
    )
}
export default AddTodo;