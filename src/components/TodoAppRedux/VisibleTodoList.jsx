import React from "react";
import { connect } from "react-redux";
import PropTypes from "prop-types";
import { toggleTodo } from "../../store/todos";

function VisibleTodoList(props) {
  // console.log(VisibleTodoList);
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

VisibleTodoList.propTypes = {
  todos: PropTypes.array,
  onTodoClick: PropTypes.func
};

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

const mapStateToProps = state => {
  console.log(state);
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  };
};
const mapDispatchToProps = dispatch => {
  return {
    onTodoClick: id => {
      dispatch(toggleTodo(id));
    }
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(VisibleTodoList);
