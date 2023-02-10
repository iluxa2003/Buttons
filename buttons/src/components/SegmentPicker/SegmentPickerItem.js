import React from "react";
import propTypes from "prop-types";
import "./SegmentPicker.scss";
const SigmentPickerItem = ({ name, value, checked = false, children }) => {
  const id = Math.random();

  return (
    <div className={"segment-picker-item"} key={Math.random()}>
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
  value: propTypes.string,
  checked: propTypes.bool,
  children: propTypes.oneOfType([propTypes.string, propTypes.object]),
};
export default SigmentPickerItem;
