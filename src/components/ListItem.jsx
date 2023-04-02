import React from "react";

import Item from "./Item";
import "./ListItem.css";

const ListItem = ({ items }) => {
  const now = new Date();
  const value = 10520.69;

  return (
    <ul className="list">
      {items.map((item) => (
        <Item key={item.id} value={item.value} date={item.date} />
      ))}
    </ul>
  );
};

export default ListItem;
