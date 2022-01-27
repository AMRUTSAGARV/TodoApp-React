import React , { useState, useEffect } from 'react';
// import logo from './logo.svg';
import './App.css';
//importing components.
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  
  //state stuff
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);
  const [status,setStatus] = useState("all");
  const [filteredTodos, setFilteredTodos] = useState([]);

//USE EFFECT
useEffect(() => {
  filterHandler();
}, [todos,status]);

  //functions
  const filterHandler=() => {
    switch(status){
      case "completed":
        setFilteredTodos(todos.filter((todo) => todo.completed === true))
      break;
      case "uncompleted":
        setFilteredTodos(todos.filter((todo) => todo.completed === false))
        break;
        default:
          setFilteredTodos(todos);
          break;

      }
  }
  return (
    <div className="App">
      <header> 
        <h1>AMT's ToDo List </h1>
        </header>
     <Form 
     inputText = {inputText} 
     todos ={todos} 
     setTodos = {setTodos} 
     setInputText={setInputText}
     setStatus={setStatus}
     filteredTodos={filteredTodos}
     />
     <TodoList setTodostodos={todos} todos={todos}/>
    </div>
  );
}

export default App;
