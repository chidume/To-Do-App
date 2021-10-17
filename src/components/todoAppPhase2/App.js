import React from 'react';
import TodoItem from './TodoItem';
import './styles.css';

function App() {
  return (
    <div className={"todo-list"}>
      <h1 className={"list-title"}>To Do List</h1>
      <form>
        <TodoItem />
        <TodoItem />
        <TodoItem />
        <TodoItem />
      </form>
    </div>
  );
}

export default App;