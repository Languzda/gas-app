import React from "react";

import "./AddNewItem.css";

import Popup from "./Popup";

const AddNewItem = ({ onAddItem, hide }) => {
  const submitHandler = (e) => {
    e.preventDefault();

    const reading = e.target.reading.value;

    if (reading === "") return;

    const now = new Date();
    const value = (+reading).toFixed(2);

    const record = {
      id: now.getTime(),
      value,
      date: now,
    };

    onAddItem(record);

    hide();
  };

  return (
    <Popup>
      <form className="form" onSubmit={submitHandler}>
        <input
          type="number"
          className="input"
          name="reading"
          placeholder="Wartość z Licznika"
          step={0.01}
        />
        <input type="submit" className="btn input" />
      </form>
    </Popup>
  );
};

export default AddNewItem;
