import React from 'react';
import TodoItem from './TodoItem';
import './styles.css';
import todosData from './todosData';

function App() {
  const todoItems = todosData.map(todoItem => {
    return <TodoItem key={todoItem.id} item={todoItem} />
  });

  return (
    <div className={"todo-list"}>
      <h1 className={"list-title"}>To Do List</h1>
      <form>
        {todoItems}
      </form>
    </div>
  );
}

export default App;