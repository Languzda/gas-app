import React from "react";

import Popup from "./Popup";

const Option = ({ hide }) => {
  return (
    <Popup>
      <h2>Opcje</h2>
      <button className="btn" onClick={hide}>
        Zamknij
      </button>
    </Popup>
  );
};

export default Option;
