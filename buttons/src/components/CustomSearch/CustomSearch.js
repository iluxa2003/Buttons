import propTypes from "prop-types";
import styles from "./CustomSearch.module.scss";
import close_button from "../../icons/x-circle.svg";
import searchSign from "../../icons/search.svg";
import { useState } from "react";
const CustomSearch = ({
  placeholder = "Search products",
  leftSvg = searchSign,
  onInput,
}) => {
  const [focus, setfocus] = useState(false);
  return (
    <div className={styles.search_wrap}>
      <input
        className={styles.search + " " + (focus && styles.focused)}
        placeholder={placeholder}
        onInput={onInput}
        onFocus={() => {
          setfocus(true);
        }}
        onBlur={() => {
          setfocus(false);
        }}
      />
      <img
        className={styles.search_sign + " " + (focus ? styles.focused : "")}
        src={leftSvg}
        alt="..."
      />
      <button
        className={styles.close_button + " " + (focus ? styles.focused : "")}
        onClick={() => {
          setfocus(false);
        }}
      >
        <img src={close_button} className={styles.icon} alt="..." />
      </button>
    </div>
  );
};
CustomSearch.propTypes = {
  placeholder: propTypes.string,
  leftSvg: propTypes.string,
  onInput: propTypes.func,
  state: propTypes.oneOf(["unfocused", "focused"]),
};
export default CustomSearch;
