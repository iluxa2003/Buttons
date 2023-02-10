import React from "react";
import propTypes from "prop-types";
import  "./CustomButton.scss";
const LargeButton = ({
  iconPosition = "left",
  darkTheme = false,
  icon,
  onClick,
  children,
}) => {
  let buttonStyle = "button-icon";
  let theme = "";
  if (darkTheme) {
    theme = "dark";
  }
  if (icon === undefined) {
    buttonStyle = "no-icon";
  }

  return (
    <div>
      <button
        className={"button" + " " + "large" + " " + theme}
        onClick={onClick}
      >
        <img
          className={
           buttonStyle +
            " " +
            (iconPosition === "center" ? "center" : "left-side")
          }
          src={icon}
          alt="..."
        />
        <div className={"button-text"}>{children}</div>
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
