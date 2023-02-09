import styles from "./CustomChecker.module.scss";
import propTypes from "prop-types";
const CustomChecker = ({ disabled = false, onChange }) => {
  return (
    <div>
      <input
        className={styles.checker}
        type="checkbox"
        disabled={disabled}
        onChange={onChange}
      />
    </div>
  );
};
CustomChecker.propTypes = {
  disabled: propTypes.bool,
  onChange: propTypes.func,
};
export default CustomChecker;
