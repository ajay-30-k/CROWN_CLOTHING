import React from "react";
import "./forminput.scss";
const Forminput = ({ handlechange, label, ...otherprops }) => {
  return (
    <div className="group">
      <input
        type="text"
        className="form-input"
        label='email'
        onChange={handlechange}
        {...otherprops}
      />
      {label ? (
        <label
          className={`${
            otherprops.value.length ? "shrink" : ""
          }form-input-label`}
        >
          {label}
        </label>
      ) : null}
    </div>
  );
};

export default Forminput;
