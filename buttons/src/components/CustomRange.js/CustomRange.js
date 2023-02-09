import { useState } from "react";
import propTypes from "prop-types";
import styles from "./CustomRange.module.scss";
const CustomRange = ({
  min = 0,
  max = 100,
  step = 1,
  showRange = false,
  currentValue = false,
  onInput,
}) => {
  const [range, setRange] = useState(0);
  const customRangeHandler = (event) => {
    setRange(event.target.value);
    try {
      onInput();
    } catch {}
  };
  return (
    <div className={styles.range_wrap}>
      <div className={styles.range}>
        <input
          type="range"
          className={styles.range_input}
          value={range}
          onInput={customRangeHandler}
          min={min}
          max={max}
          step={step}
        />

        {currentValue && (
          <span
            className={styles.range_current_number}
            style={{ left: 4 + range * 0.85 + "%" }}
          >
            {range}
          </span>
        )}
      </div>

      {showRange && (
        <div className={styles.range_info}>
          <div>{min}</div>
          <div>{max}</div>
        </div>
      )}
    </div>
  );
};

CustomRange.propTypes = {
  min: propTypes.number,
  max: propTypes.number,
  step: propTypes.number,
  currentValue: propTypes.bool,
  showRange: propTypes.bool,
  onInput: propTypes.func,
};
export default CustomRange;
