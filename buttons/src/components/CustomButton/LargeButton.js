import propTypes from "prop-types";
import styles from "./CustomButton.module.scss";
const LargeButton = ({
  iconPosition = "left",
  darkTheme = false,
  icon,
  onClick,
  children,
}) => {
  let buttonStyle = styles.button_icon;
  let theme = "";
  if (darkTheme) {
    theme = styles.dark;
  }
  if (icon === undefined) {
    buttonStyle = styles.no_icon;
  }

  return (
    <div>
      <button
        className={styles.button + " " + styles.large + " " + theme}
        onClick={onClick}
      >
        <img
          className={
            buttonStyle +
            " " +
            (iconPosition === "center" ? styles.center : styles.left_side)
          }
          src={icon}
          alt="..."
        />
        <div className={styles.button_text}>{children}</div>
      </button>
    </div>
  );
};

LargeButton.propTypes = {
  icon: propTypes.string,
  onClick: propTypes.func,
  label: propTypes.string,
  darkTheme: propTypes.bool,
  iconPosition: propTypes.oneOf(["left", "center"]),
};

export default LargeButton;
