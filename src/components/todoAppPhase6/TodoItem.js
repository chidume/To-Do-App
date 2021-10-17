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
          {text}
        </p>
      </label>
    );
  }
}

export default TodoItem;