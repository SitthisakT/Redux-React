import React from "react";

export default function Link(props) {
  if (props.visibilityFilter === props.filter) {
    return <span>{props.children}</span>;
  }

  return (
    <div>
      <a
        href="/#"
        onClick={e => {
          e.preventDefault();
          props.onClick(props.filter);
        }}
      >
        {props.children}
      </a>
    </div>
  );
}
