import React from "react";

export default function VisibleTodoList(props) {
  return (
    <div>
      <ul>
        {props.todos.map(todo => (
          <li
            key={todo.id}
            style={{
              textDecoration: todo.completed ? "line-through" : "none"
            }}
            onClick={() => {
              props.onTodoClick(todo.id);
            }}
          >
            {todo.text}
          </li>
        ))}
      </ul>
    </div>
  );
}
