import React from "react";

import "./Popup.css";

const Popup = (props) => {
  return (
    <div className="overlay">
      <div className="popup">{props.children}</div>
    </div>
  );
};

export default Popup;
