import React from "react";
import propTypes from "prop-types";
import "./CustomButton.scss";
const NoTextButton = ({ icon, onClick, size = "medium" }) => {
  let buttonSize = "small";
  if (size === "medium") {
    buttonSize = "medium";
  }

  return (
    <div>
      <button className={"button" + " " + buttonSize} onClick={onClick}>
        <img className={"button-icon"} src={icon} alt="..." />
      </button>
    </div>
  );
};

NoTextButton.propTypes = {
  icon: propTypes.string,
  onClick: propTypes.func,
  size: propTypes.oneOf(["small", "medium"]),
};
export default NoTextButton;
