import { React, useState } from "react";
import "./SegmentPicker.scss";
import propTypes from "prop-types";
import SigmentPickerItem from "./SegmentPickerItem";

function SegmentPicker({ list, onChange, name }) {
  const [segmentPickerState, setSegmentPickerState] = useState("");
  const segmentPickerHandler = (event) => {
    setSegmentPickerState(event.target.value);
    try {
      onChange(event);
    } catch {}
  };
  return (
    <div className="segment-picker" onChange={segmentPickerHandler}>
      {list.map((item) => (
        <SigmentPickerItem
          name={name}
          value={item.value}
          checked={segmentPickerState === item.value && true}
          key={Math.random()}
        >
          {item.text}
        </SigmentPickerItem>
      ))}
    </div>
  );
}
SegmentPicker.propTypes = {
  list: propTypes.array,
  name: propTypes.string,
  onChange: propTypes.func,
};

SegmentPicker.defaultProps = {
  list: [],
  name: Math.random(),
  onChange: () => {},
};

export default SegmentPicker;
