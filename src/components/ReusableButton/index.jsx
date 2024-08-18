import React from "react";
import { ReactSVG } from "react-svg";

const ReusableButton = ({ onClick, label, iconKey, className, isDisabled }) => {
    return (
      <button
        disabled={isDisabled}
        onClick={onClick}
        className={className}
        title={label}
      >
      {iconKey && (
        <ReactSVG
          src={iconKey}
          beforeInjection={(svg) => {
            svg.setAttribute('role', 'img');
            svg.setAttribute('aria-label', label);
          }}
        />
        )}
        <label>{label}</label>
      </button>
    );
  };
export default ReusableButton