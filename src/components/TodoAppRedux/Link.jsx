import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setVisibilityFilter } from "../../store/visibilityFilter";

function Link(props) {
  if (props.active) {
    console.log(props.children);
    return <span>{props.children}</span>;
  }

  return (
    <a
      href="/#"
      onClick={e => {
        e.preventDefault();
        props.onClick(props.filter);
      }}
    >
      {props.children}
    </a>
  );
}

Link.propTypes = {
  visibilityFilter: PropTypes.string.isRequired,
  filter: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired
};

const mapStateToProps = (state, ownProps) => {
  return {
    visibilityFilter: state.visibilityFilter,
    active: state.visibilityFilter === ownProps.filter
  };
};

const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter));
    }
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Link);
