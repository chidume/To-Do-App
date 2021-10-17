import React from 'react';

function TodoItem(props) {
  const {text, completed} = props.item;

  return (
    <label>
      <p className={"todo-item"}>
        <input type="checkbox" checked={completed} /> {text}
      </p>
    </label>
  )
}

export default TodoItem;