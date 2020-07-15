import React from "react";
import VisibleTodoList from "./VisibleTodoList";
import AddTodo from "./AppTodo";
import Footer from "./Footer";

function TodoApp() {
  return (
    <div>
      <VisibleTodoList />
      <AddTodo />
      <Footer />
    </div>
  );
}

export default TodoApp;
