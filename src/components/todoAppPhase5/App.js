import React from 'react';
import TodoItem from './TodoItem';
import './styles.css';
import todosData from './todosData';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {data: todosData,}
  }

  render() {
    const todoItems = this.state.data.map(todoItem => {
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
}

export default App;