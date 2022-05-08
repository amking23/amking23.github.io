import React from "react";

export default (props) => {
  return (
    <button
      className={`hamburger hamburger--collapse ${
        props.isActive ? "is-active" : ""
      }`}
      type="button"
      onClick={() => props.toggleButton()}
    >
      <span className="hamburger-box">
        <span className="hamburger-inner"></span>
      </span>
    </button>
  );
};
