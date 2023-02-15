import { React, useState } from "react";
import propTypes from "prop-types";
import "./CustomSearch.scss";
import closeButton from "../../icons/x-circle.svg";
import searchSign from "../../icons/search.svg";

function CustomSearch({
  placeholder,
  leftSvg,
  onInput,
}) {
  const [focus, setfocus] = useState(false);
  return (
    <div className="search-wrap">
      <input
        className={`search ${focus && "focused"}`}
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
        className={`search-sign ${focus && "focused"}`}
        src={leftSvg}
        alt="Error"
      />
      <button
        type="button"
        className={`close-button ${focus && "focused"}`}
        onClick={() => {
          setfocus(false);
        }}
      >
        <img src={closeButton} className="icon" alt="Error" />
      </button>
    </div>
  );
}
CustomSearch.propTypes = {
  placeholder: propTypes.string,
  leftSvg: propTypes.string,
  onInput: propTypes.func,
};

CustomSearch.defaultProps = {
  placeholder: "Search products",
  leftSvg: searchSign,
  onInput: () => { },
};
export default CustomSearch;
