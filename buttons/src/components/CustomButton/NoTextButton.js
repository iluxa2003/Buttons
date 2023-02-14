import React from "react";
import propTypes from "prop-types";
import "./CustomButton.scss";
const NoTextButton = ({ icon, onClick, size = "medium" }) => {
  return (
    <div>
      <button className={"button " + size} onClick={onClick}>
        <img className={"button-icon"} src={icon} alt="Error" />
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
