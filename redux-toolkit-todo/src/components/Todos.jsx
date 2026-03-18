import React,{useState} from "react";
import { useSelector, useDispatch } from "react-redux";
import {removeTodo, updateTodo} from "../features/todo/todoSlice";

function Todos(){
    const todos=useSelector(state=> state.todos)
    const [editId, setEditId] = useState(null);
    const [editText, setEditText] = useState("");

    const dispatch=useDispatch();

    const handleEdit = (todo) => {
    setEditId(todo.id);
    setEditText(todo.text);
    };

    const handleUpdate = (id) => {
    dispatch(updateTodo({ id, text: editText }));
    setEditId(null);
    setEditText("");
    };
    return(
        <>
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-100 to-purple-200">
  <div className="w-full max-w-md bg-white p-6 rounded-xl shadow-lg">

    <h2 className="text-xl font-semibold mb-4 text-gray-700 text-center">
      Todos
    </h2>

    <ul className="space-y-3">
      {todos?.map((todo) => (
        <li
          key={todo.id}
          className="flex items-center justify-between bg-gray-100 px-3 py-2 rounded-md"
        >
          {/* LEFT SIDE (text / input) */}
          <div className="flex-1">
            {editId === todo.id ? (
              <input
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === "Enter") handleUpdate(todo.id);
                }}
                className="w-full px-2 py-1 rounded border text-black"
              />
            ) : (
              <span className="text-gray-800 font-medium">
                {todo.text}
              </span>
            )}
          </div>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex gap-2 ml-3">
            
            {/* Update / Save */}
            {editId === todo.id ? (
              <button
                onClick={() => handleUpdate(todo.id)}
                className="p-2 bg-green-500 hover:bg-green-600 text-white rounded-full transition"
              >
                ✅
              </button>
            ) : (
              <button
                onClick={() => handleEdit(todo)}
                className="p-2 bg-blue-500 hover:bg-blue-600 text-white rounded-full transition"
              >
                ✏️
              </button>
            )}

            {/* Delete */}
            <button
              onClick={() => dispatch(removeTodo(todo.id))}
              className="p-2 bg-red-500 hover:bg-red-600 text-white rounded-full transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79"
                />
              </svg>
            </button>

          </div>
        </li>
      ))}
    </ul>

    {/* Empty state */}
    {todos?.length === 0 && (
      <p className="text-center text-gray-500 mt-4">
        No todos yet
      </p>
    )}

  </div>
</div>
        </>
    )
}

export default Todos;