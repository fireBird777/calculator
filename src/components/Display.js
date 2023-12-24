import React from "react";
import PropTypes from "prop-types";
import "./Display.css";

export const Display = ({ value }) => {
  return (
    <div className="component-display">
      <div>{0}</div>
    </div>
  );
};

Display.prototype = {
  value: PropTypes.string,
};
