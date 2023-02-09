import propTypes from "prop-types";
import styles from "./SegmentPicker.module.scss";
const SigmentPickerItem = ({ name, value, checked = false, children }) => {
  const id = Math.random();

  return (
    <div className={styles.segment_picker_item} key={Math.random()}>
      <input
        type="radio"
        id={id}
        name={name}
        value={value}
        defaultChecked={checked}
      />

      <label htmlFor={id}>{children}</label>
    </div>
  );
};
SigmentPickerItem.propTypes = {
  name: propTypes.string,
  checked: propTypes.bool,
};
export default SigmentPickerItem;
