import propTypes from "prop-types";
import styles from "./CustomButton.module.scss";
const NoTextButton = ({ icon, onClick, size = "medium" }) => {
  let buttonSize = styles.small;
  if (size === "medium") {
    buttonSize = styles.medium;
  }

  return (
    <div>
      <button className={styles.button + " " + buttonSize} onClick={onClick}>
        <img className={styles.button_icon} src={icon} alt="..." />
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
