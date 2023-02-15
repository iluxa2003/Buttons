import React from "react";
import "./CustomChecker.scss";
import propTypes from "prop-types";

function CustomChecker({ disabled, onChange }) {
  return (
    <div>
      <input
        className="checker"
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
}

CustomChecker.propTypes = {
  disabled: propTypes.bool,
  onChange: propTypes.func,
};

CustomChecker.defaultProps = {
  disabled: false,
  onChange: () => { },
};
export default CustomChecker;
