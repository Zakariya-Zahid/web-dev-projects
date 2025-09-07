import { useState } from 'react'
import React from 'react'
import { useTodo } from '../context'

const TodoItem = ({todo}) => {
    const [isTodoEditable, setIsTodoEditable] = useState(false)
    const [todoMsg, setTodoMsg] = useState(todo.todo)
    const {updateTodo, deleteTodo, toggleComplete} = useTodo()

    const editTodo = () => {
        updateTodo(todo.id, {...todo, todo: todoMsg})
        setIsTodoEditable(false)
    }

    const toggleTodo = () => {
        toggleComplete(todo.id)
    }
    const toggleCompleted = () =>{
        toggleComplete(todo.id)
    }
  return (
    <div className={`flex items-center gap-3 p-4 rounded-xl backdrop-blur-sm border transition-all duration-300 ${todo.completed ? "bg-green-500/20 border-green-400/30 text-white/70" : "bg-white/10 border-white/20 text-white hover:bg-white/20"}`}>
      <input
        type="checkbox"
        className="w-5 h-5 rounded-md cursor-pointer accent-blue-500 transition-transform hover:scale-110"
        checked={todo.completed}
        onChange={toggleCompleted}
      />
      <input
        type="text"
        className={`flex-1 bg-transparent outline-none rounded-lg px-3 py-2 transition-all duration-200 ${isTodoEditable ? "bg-white/20 border border-blue-400/50" : "border border-transparent"} ${todo.completed ? "line-through text-white/50" : ""}`}
        value={todoMsg}
        onChange={(e)=> setTodoMsg(e.target.value)}
        readOnly = {!isTodoEditable}
      />
      <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-blue-500/30 border border-white/20 hover:border-blue-400/50 flex items-center justify-center transition-all duration-200 disabled:opacity-50 disabled:cursor-not-allowed hover:scale-105 active:scale-95"
      onClick={()=>{
        if(todo.completed) return
        if(isTodoEditable){
            editTodo()
        }else setIsTodoEditable((prev)=> !prev)
      }}
      disabled={todo.completed}
      >
        {isTodoEditable ? "💾": "✏️"}
      </button>
      <button className="w-10 h-10 rounded-lg bg-white/10 hover:bg-red-500/30 border border-white/20 hover:border-red-400/50 flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95"
      onClick={()=> deleteTodo(todo.id)}
      >
        🗑️
      </button>
    </div>
  )
}

export default TodoItem