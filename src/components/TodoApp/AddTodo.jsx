import React, { useRef } from "react";

export default function AddTodo(props) {
  const input = useRef(null);
  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const text = input.current.value;
          props.onSubmit(text);
          input.current.value = "";
        }}
      >
        <input ref={input} type="text" />
        <button type="submit">Add Todo</button>
      </form>
    </div>
  );
}
