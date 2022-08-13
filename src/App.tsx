import React from 'react';
import Login from './login/Login'
import TodoList from './todo/TodoList'
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import CreateTodoList from './todo/CreateTodoList';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path='/' element={Login()} />
          <Route path='/cTodo' element={CreateTodoList()} />
          <Route path='/todo' element={TodoList()} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
