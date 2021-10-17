import React from 'react';

class TodoItem extends React.Component {
  render() {
    const {text, id, completed} = this.props.item;

    return (
      <label>
        <p className={"todo-item"}>
          <input 
            type="checkbox" 
            checked={completed} 
            onChange={() => this.props.changeHandler(id)}
        /> 
          <span className={completed && "completed"}>{text}</span>
        </p>
      </label>
    );
  }
}

export default TodoItem;