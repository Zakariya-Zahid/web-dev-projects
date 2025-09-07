import React, { useEffect, useState } from 'react'
import { TodoProvider } from './context';
import TodoForm from './components/TodoForm';
import TodoItem from './components/TodoItem';

const App = () => {
  const [todos, setTodos] = useState([]);
  const addTodo = (todo)=>{
    setTodos((prev)=> [{id: Date.now(), ...todo}, ...prev])
  }
  const updateTodo = (id,todo) =>{
    setTodos((prev)=> prev.map((prevTodo)=> (prevTodo.id === id ? todo : prevTodo)))
  }

  const deleteTodo = (id) => {
    setTodos((prev)=> prev.filter((todo)=> todo.id !== id))
  }

  const toggleComplete = (id)=>{
    setTodos((prev)=> prev.map((prevTodo)=> prevTodo.id === id ? {...prevTodo, completed: !prevTodo.completed}: prevTodo))
  }

  useEffect(()=>{
    const todos = JSON.parse(localStorage.getItem('todos'))
    if(todos && todos.length>0){
      setTodos(todos)
    }
  },[])

  useEffect(()=>{
    localStorage.setItem('todos',JSON.stringify(todos))
  },[todos])
  return (
    <TodoProvider value={{todos, addTodo, updateTodo, deleteTodo, toggleComplete}}>
    <div className='bg-gradient-to-br from-blue-900 via-purple-900 to-indigo-900 min-h-screen py-8 px-4'>
      <div className='w-full max-w-2xl mx-auto bg-white/10 backdrop-blur-lg shadow-2xl rounded-2xl px-6 py-8 text-white border border-white/20'>
        <div className='text-center mb-8'>
          <h1 className='text-4xl font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent mb-2'>
            ✨ Todo Manager
          </h1>
          <p className='text-white/70 text-sm'>Stay organized and productive</p>
        </div>
        
        <div className='mb-6'>
          <TodoForm />
        </div>
        
        {todos.length === 0 ? (
          <div className='text-center py-12'>
            <div className='text-6xl mb-4'>📝</div>
            <p className='text-white/60 text-lg'>No todos yet</p>
            <p className='text-white/40 text-sm'>Add your first task above!</p>
          </div>
        ) : (
          <div className='space-y-3'>
            <div className='flex justify-between items-center mb-4'>
              <span className='text-white/70 text-sm'>
                {todos.filter(todo => !todo.completed).length} of {todos.length} tasks remaining
              </span>
            </div>
            {todos.map((todo)=>(
              <div key={todo.id} className='w-full'>
                <TodoItem todo={todo}/>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
    </TodoProvider>
  )
}

export default App