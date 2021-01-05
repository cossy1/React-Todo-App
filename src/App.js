import React, { useState, useEffect } from 'react'
import Title from './components/Title'
import TodoForm from './components/TodoForm'
import TodoList from './components/TodoList';
import './index.css';

const LOCAL_STORAGE_KEY = "react-todo-list"


function App() {
  const [todos, setTodos] = useState([]);

function addTodo(todo) {
  setTodos([todo, ...todos]);
}

function toggleComplete(id) {
  setTodos(
    todos.map(todo=>{
      if(todo.id === id){
        return{
          ...todo,
          completed: !todo.completed
        };
      }
      return todo;
    })
  );
}

function removeTodo(id) {
  setTodos(
    todos.filter((todo)=>{
      if(todo.id !== id)
      return todo;
    })
  )
}

useEffect(()=>{
  const storageTodo = JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY));
  if(storageTodo){
    setTodos(storageTodo)
  }

}, [])


useEffect(()=>{
  localStorage.setItem(LOCAL_STORAGE_KEY, JSON.stringify(todos))
 
}, [todos])

  return(
    <div className='main'>
      <Title />
      <TodoForm  addTodo={addTodo} />
      <TodoList todos={todos} toggleComplete={toggleComplete} removeTodo={removeTodo}/>
    </div>
  );
} 
export default App