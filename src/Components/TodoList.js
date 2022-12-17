import React, { useState } from 'react';
import TodoForm from './TodoForm';
import Todo from './Todo';
import '../App.css';
import { Navbar } from 'react-bootstrap';

function TodoList() {
  const [todos, setTodos] = useState([]);

  const addTodo = todo => {
    if (!todo.text || /^\s*$/.test(todo.text)) { //^something$ start and end // \s is any string character//* means zero or more
      return;                                    //is the regex for empty string or string with only spaces
    }
    
    const newTodos = [todo, ...todos];

    setTodos(newTodos);
    // console.log(todos);
    fetch("http://localhost:5000/create",{
      method:'POST',
      headers:{
        'Accept':'application/json',
        'content-Type':'application/json'
      },
      body:JSON.stringify(todos)    
    }).then((resp)=>{
      resp.json().then((result)=>{
      //  console.log(result)
      })
    })
  };

  const updateTodo = (todoId, newValue) => {
    if (!newValue.text || /^\s*$/.test(newValue.text)) {
      return;
    }

    setTodos(prev => prev.map(item => (item.id === todoId ? newValue : item)));
  };

  const removeTodo = id => {
    const removedArr = [...todos].filter(todo => todo.id !== id);

    setTodos(removedArr);
  };

  const completeTodo = id => {
    let updatedTodos = todos.map(todo => {
      if (todo.id === id) {
        todo.isComplete = !todo.isComplete;
      }
      return todo;
    });
    setTodos(updatedTodos);
  };

  return (
    <>
      <h1>What's the Plan for Today?</h1>
     
      <TodoForm onSubmit={addTodo} />
      <Todo
        todos={todos}
        completeTodo={completeTodo}
        removeTodo={removeTodo}
        updateTodo={updateTodo}
      />
      
    </>
  );
}

export default TodoList;