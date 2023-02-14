import React from "react";
import propTypes from "prop-types";
import "./CustomButton.scss";
const LargeButton = ({
  iconPosition = "left",
  darkTheme = false,
  icon,
  onClick,
  children,
}) => {
  return (
    <div>
      <button
        className={"button large " + (darkTheme && "dark")}
        onClick={onClick}
      >
        <img
          className={
            (icon ? "button-icon" : "no-icon") +
            (iconPosition === "center" ? " center" : " left-side")
          }
          src={icon}
          alt="Something went wrong"
        />
        <div className="button-text">{children}</div>
      </button>
    </div>
  );
};

LargeButton.propTypes = {
  icon: propTypes.string,
  onClick: propTypes.func,
  label: propTypes.string,
  darkTheme: propTypes.bool,
  children: propTypes.oneOfType([propTypes.string, propTypes.object]),
  iconPosition: propTypes.oneOf(["left", "center"]),
};

export default LargeButton;
