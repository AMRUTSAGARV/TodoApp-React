import React , { useState } from 'react';
// import logo from './logo.svg';
import './App.css';
//importing components.
import Form from './components/Form';

import TodoList from './components/TodoList';
function App() {
  const [inputText,setInputText] = useState("");
  return (
    <div className="App">
      <header> <h1>AMT's ToDo List {inputText}</h1></header>
     <Form setInputText={setInputText}/>
     <TodoList/>
    </div>
  );
}

export default App;
