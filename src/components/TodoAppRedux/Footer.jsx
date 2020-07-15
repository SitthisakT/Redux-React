import React from "react";
import Link from "./Link";

export default function Footer(props) {
  return (
    <div>
      <span>
        Show: <Link filter="SHOW_ALL">All</Link> |{" "}
        <Link filter="SHOW_COMPLETED">Completed</Link> |{" "}
        <Link filter="SHOW_ACTIVE">Active</Link>{" "}
      </span>
    </div>
  );
}
