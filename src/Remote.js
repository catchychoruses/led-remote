import React from "react";
import "./Remote.css";
import LayoutButtons from "./LayoutButtons.js";

function Remote() {
  return (
    <div className="remoteWrapper">
      <form className="formContainer">
        <LayoutButtons />
      </form>
    </div>
  );
}

export default Remote;
