import React from "react";
import Link from "./Link";

export default function Footer(props) {
  return (
    <div>
      <span>
        Show:{" "}
        <Link
          filter="SHOW_ALL"
          onClick={props.onFilterLinkClick}
          visibilityFilter={props.visibilityFilter}
        >
          All
        </Link>{" "}
        |{" "}
        <Link
          filter="SHOW_COMPLETED"
          onClick={props.onFilterLinkClick}
          visibilityFilter={props.visibilityFilter}
        >
          Completed
        </Link>{" "}
        |{" "}
        <Link
          filter="SHOW_ACTIVE"
          onClick={props.onFilterLinkClick}
          visibilityFilter={props.visibilityFilter}
        >
          Active
        </Link>
      </span>
    </div>
  );
}
