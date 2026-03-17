import React, {useState} from "react";
import {useTodo} from "../contexts"


function TodoItem({ todo }) {
  const [isTodoEditable, setIsTodoEditable] = useState(false);
  const [todoMsg, setTodoMsg] = useState(todo.todo);
  const { deleteTodo, updateTodo, toggleComplete } = useTodo();

  const editTodo=()=>{
    updateTodo(todo.id, {...todo, todo: todoMsg})
    setIsTodoEditable(false)
  }

  const toggleCompleted=()=>{
    toggleComplete(todo.id)
  }
  return (
    <div
      className={`flex items-center gap-3 border text-black border-gray-200 rounded-md px-3 py-2 shadow-sm transition ${
        todo.completed ? "bg-green-100" : "bg-gray-50"
      }`}
    >
      <input
        type="checkbox"
        className="cursor-pointer accent-green-500"
        checked={todo.completed}
        onChange={toggleCompleted}
      />

      <input
        type="text"
        className={`w-full bg-transparent outline-none rounded-md ${
          isTodoEditable ? "border border-gray-300 px-2 py-1" : "border-transparent"
        } ${todo.completed ? "line-through text-gray-500" : ""}`}
        value={todoMsg}
        onChange={(e) => setTodoMsg(e.target.value)}
        readOnly={!isTodoEditable}
      />

      {/* Edit / Save */}
      <button
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 bg-white hover:bg-gray-100 transition disabled:opacity-50"
        onClick={() => {
          if (todo.completed) return;

          if (isTodoEditable) {
            editTodo();
          } else setIsTodoEditable((prev) => !prev);
        }}
        disabled={todo.completed}
      >
        {isTodoEditable ? "💾" : "✏️"}
      </button>

      {/* Delete */}
      <button
        className="flex items-center justify-center w-8 h-8 rounded-md border border-gray-200 bg-white hover:bg-red-100 transition"
        onClick={() => deleteTodo(todo.id)}
      >
        ❌
      </button>
    </div>
  );
}

export default TodoItem;