import React, { useRef, useState } from "react";
import VisibleTodoList from "./VisibleTodoList";
import AddTodo from "./AddTodo";
// import Link from "./Link";
import Footer from "./Footer";

const getVisibleTodos = (todos, visibilityFilter) => {
  switch (visibilityFilter) {
    case "SHOW_ALL":
      return todos;
    case "SHOW_COMPLETED":
      return todos.filter(todo => todo.completed);
    case "SHOW_ACTIVE":
      return todos.filter(todo => !todo.completed);
    default:
      return todos;
  }
};

const addTodo = (todos, text) => {
  return [
    ...todos,
    { id: todos[todos.length - 1].id - 1, text: text, completed: false }
  ];
};

// console.log(++id === (id = id + 1))
let id = 0;
function TodoApp() {
  const [visibilityFilter, setVisibilityFilter] = useState("SHOW_ALL");
  const [todos, setTodos] = useState([
    { id: id++, text: "Learn React", completed: true },
    { id: id++, text: "Learn Vue", completed: false }
  ]);

  const toggleTodo = (todos, id) => {
    return todos.map(targetTodo => {
      if (targetTodo.id !== id) return targetTodo;
      return {
        ...targetTodo,
        completed: !targetTodo.completed
      };
    });
  };

  const onTodoClick = id => {
    setTodos(toggleTodo(todos, id));
  };

  const onSubmit = text => {
    setTodos(addTodo(todos, text));
  };

  const onFilterLinkClick = filter => {
    setVisibilityFilter(filter);
  };

  return (
    <div>
      <VisibleTodoList
        todos={getVisibleTodos(todos, visibilityFilter)}
        onTodoClick={onTodoClick}
      />
      <AddTodo onSubmit={onSubmit} />
      <Footer
        visibilityFilter={visibilityFilter}
        onFilterLinkClick={onFilterLinkClick}
      />
    </div>
  );
}

export default TodoApp;
