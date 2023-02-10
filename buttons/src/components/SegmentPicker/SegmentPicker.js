import  "./SegmentPicker.scss";
import SigmentPickerItem from "./SegmentPickerItem";
import propTypes from "prop-types";
import { React, useState } from "react";
const SegmentPicker = ({ list, onChange, name }) => {
  const [segmentPickerState, setSegmentPickerState] = useState("");
  const segmentPickerHandler = (event) => {
    setSegmentPickerState(event.target.value);
    try {
      onChange(event);
    } catch {}
  };
  return (
    <div className={"segment-picker"} onChange={segmentPickerHandler}>
      {list.map((item) => {
        return (
          <SigmentPickerItem
            name={name}
            value={item.value}
            checked={segmentPickerState === item.value && true}
            key={Math.random()}
          >
            {item.text}
          </SigmentPickerItem>
        );
      })}
    </div>
  );
};
SegmentPicker.propTypes = {
  list: propTypes.array,
  name: propTypes.string,
  onChange: propTypes.func,
};
export default SegmentPicker;
