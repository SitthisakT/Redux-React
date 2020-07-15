import React, { useRef } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { addTodo } from "../../store/todos";

function AddTodo(props) {
  const input = useRef(null);

  return (
    <div>
      <form
        onSubmit={e => {
          e.preventDefault();
          const text = input.current.value;
          if (text === "") return;
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

AddTodo.propTypes = {
  onSubmit: PropTypes.func.isRequired
};

const mapDispatchToProps = dispatch => {
  return {
    onSubmit: text => {
      dispatch(addTodo(text));
    }
  };
};
export default connect(
  null,
  mapDispatchToProps
)(AddTodo);
