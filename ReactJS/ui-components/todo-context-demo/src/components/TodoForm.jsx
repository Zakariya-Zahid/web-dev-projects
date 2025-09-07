import React, { useState } from 'react'
import { useTodo } from '../context'

const TodoForm = () => {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add = (e) =>{
        e.preventDefault();
        if(!todo) return
        addTodo({todo, completed: false})
        setTodo("")
    }
  return (
    <form onSubmit={add} className="flex gap-2">
      <div className="flex-1 relative">
        <input
          type="text"
          value={todo}
          onChange={(e)=> setTodo(e.target.value)}
          placeholder="✍️ What needs to be done?"
          className="w-full bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl px-4 py-3 outline-none duration-300 text-white placeholder-white/60 focus:border-blue-400 focus:bg-white/30 focus:shadow-lg focus:shadow-blue-500/20"
        />
      </div>
      <button
        type="submit"
        className="bg-gradient-to-r from-blue-500 to-purple-600 hover:from-blue-600 hover:to-purple-700 text-white font-medium px-6 py-3 rounded-xl transition-all duration-300 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 active:scale-95 flex items-center gap-2"
      >
        <span>➕</span>
        Add
      </button>
    </form>
  )
}

export default TodoForm