import Item from "./Item";
import "./ListItem.css";

const ListItem = ({ items, selected, setSelected }) => {
  const onSelectHandler = (id) => {
    setSelected(id);
    console.log(id);
  };

  return (
    <ul className="list">
      {items.map((item) => (
        <Item
          key={item.id}
          value={item.value}
          date={item.date}
          selected={selected === item.id}
          onClick={onSelectHandler.bind(null, item.id)}
        />
      ))}
    </ul>
  );
};

export default ListItem;
