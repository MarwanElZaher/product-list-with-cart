import React from "react";
import { ReactSVG } from "react-svg";

const ReusableButton = ({ onClick, label, iconKey, className, isDisabled }) => {
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={`penta-button ${className}`}
        title={label}
      >
        {iconKey && <ReactSVG src={iconKey} />}
        <label>{label}</label>
      </button>
    );
  };
export default ReusableButton