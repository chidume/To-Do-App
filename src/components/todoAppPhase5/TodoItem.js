import React from 'react';

class TodoItem extends React.Component {
  handleCheck = () => {
    console.log("CHECK!");
  }

  render() {
    const {text, completed} = this.props.item;

    return (
      <label>
        <p className={"todo-item"}>
          <input type="checkbox" checked={completed} onChange={this.handleCheck}/> 
          {text}
        </p>
      </label>
    );
  }
}

export default TodoItem;