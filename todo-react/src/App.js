import React , { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
//importing components.
import Form from './components/Form';
import TodoList from './components/TodoList';

function App() {
  const [inputText, setInputText] = useState("");
  const [todos, setTodos] = useState([]);

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
     />
     <TodoList setTodostodos={todos}/>
    </div>
  );
}

export default App;
