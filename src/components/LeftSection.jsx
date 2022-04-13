import React from "react";
import logo from "../images/logo.svg";
import Input from "./Input";

const LeftSection = () => {
  return (
    <div className="L-S">
      <div className="ls-img">
        <img src={logo} alt="" />
      </div>
      <div className="ls-content">
        <h1>
          <span>WE'RE </span>
          <br /> COMING SOON
        </h1>
        <p className="ls-p">
          Hello fellow shoppers! We're currently building our new fashion store.
          Add your email below to stay up-to-date with announcements and our
          launch deals.
        </p>
        <Input />
      </div>
    </div>
  );
};

export default LeftSection;
