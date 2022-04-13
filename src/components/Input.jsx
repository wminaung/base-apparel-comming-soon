import React from "react";
import iconError from "../images/icon-error.svg";
import iconArrow from "../images/icon-arrow.svg";

const Input = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <form action="get" onSubmit={handleSubmit}>
      <label htmlFor="email">email</label>
      <div className="input-email">
        <input type="email" id="email" placeholder="Email Address" required />
        <img className="error-icon" src={iconError} alt="error-icon" />
        <button className="btn-email" type="submit">
          <img className="arrow-icon" src={iconArrow} alt="arrow-icon" />
        </button>
      </div>
    </form>
  );
};

export default Input;
