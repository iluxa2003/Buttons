import propTypes from "prop-types";
import "./CustomSearch.scss";
import closeButton from "../../icons/x-circle.svg";
import searchSign from "../../icons/search.svg";
import { React, useState } from "react";
const CustomSearch = ({
  placeholder = "Search products",
  leftSvg = searchSign,
  onInput,
}) => {
  const [focus, setfocus] = useState(false);
  return (
    <div className={"search-wrap"}>
      <input
        className={"search" + " " + (focus && "focused")}
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
        className={"search-sign" + " " + (focus && "focused")}
        src={leftSvg}
        alt="..."
      />
      <button
        className={"close-button" + " " + (focus && "focused")}
        onClick={() => {
          setfocus(false);
        }}
      >
        <img src={closeButton} className={"icon"} alt="..." />
      </button>
    </div>
  );
};
CustomSearch.propTypes = {
  placeholder: propTypes.string,
  leftSvg: propTypes.string,
  onInput: propTypes.func,
};
export default CustomSearch;
