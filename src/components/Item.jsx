import React from "react";

import "./Item.css";

const Item = ({ value, date }) => {
  const year = date.getFullYear();
  const month = (date.getMonth() + 1).toString().padStart(2, "0");
  const day = date.getDate();
  const hours = date.getHours().toString().padStart(2, "0");
  const minutes = date.getMinutes().toString().padStart(2, "0");

  const time = `${hours}:${minutes} ${day}.${month}.${year}`;

  return (
    <li>
      <div className="list__item">
        {value} <span className="date">{time}</span>
      </div>
    </li>
  );
};

export default Item;
