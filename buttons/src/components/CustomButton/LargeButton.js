import propTypes from "prop-types";
import styles from "./Button.module.css";
const CustomButton = ({
  iconPosition = "none",
  icon,
  size = "medium",
  onClick,
  label,
}) => {
  return (
    <div>
      <button
        className={styles.button + " ." + styles.size}
        style={style}
        onClick={onClick}
      >
        <img
          className={
            styles.button_icon +
            " " +
            (iconPosition === "left" ? styles.left_side : "") +
            (iconPosition === "center" ? styles.center : "") +
            (iconPosition === "none" ? styles.none : "")
          }
          src={icon}
        />
        <div className={styles.button_text}>{label}</div>
      </button>
    </div>
  );
};

const Button = ({
  label,
  onClick,
  backgroundColor = "black",
  color = "white",
  borderRadius = "14px",
  border = "0",
  size = "medium",
  margin = "5px",
  iconType = "none",
  icon,
}) => {
  let padding = "16px";
  if (size === "small") {
    padding = "16px";
  }
  if (size === "medium") {
    padding = "16px 32px";
  }
  if (size === "large") {
    padding = "16px 130px";
  }
  const style = {
    background: backgroundColor,
    borderRadius,
    border,
    padding,
    color,
    margin,
  };
};

export default CustomButton;
