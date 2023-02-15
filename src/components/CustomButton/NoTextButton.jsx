import React from "react";
import propTypes from "prop-types";
import "./CustomButton.scss";
import searchSign from "../../icons/search.svg";

function NoTextButton({ icon, onClick, size }) {
  return (
    <div>
      <button
        type="button"
        className={`button ${size}`}
        onClick={onClick}
      >
        <img className="button-icon" src={icon} alt="Error" />
      </button>
    </div>
  );
}

NoTextButton.propTypes = {
  icon: propTypes.string,
  onClick: propTypes.func,
  size: propTypes.oneOf(["small", "medium"]),
};

NoTextButton.defaultProps = {
  icon: searchSign,
  onClick: () => { },
  size: "medium",
};
export default NoTextButton;
