import React, { useEffect } from "react";
import { useState } from "react";

import "./App.css";
import AddNewItem from "./components/AddNewItem";
import ListItem from "./components/ListItem";

const App = () => {
  const [records, setRecords] = useState([]);
  const [showAddItemPopup, setShowAddItemPopup] = useState(false);

  useEffect(() => {
    const storedRecords = JSON.parse(localStorage.getItem("records"));
    console.log(storedRecords);
    if (storedRecords) {
      setRecords(
        storedRecords.map((record) => ({
          id: record.id,
          value: record.value,
          date: new Date(record.date),
        }))
      );
    }
  }, []);

  const addRecordHandler = (record) => {
    setRecords((prevRecords) => {
      localStorage.setItem("records", JSON.stringify([record, ...prevRecords]));
      return [record, ...prevRecords];
    });
  };

  const showPopupHandler = () => {
    setShowAddItemPopup(true);
  };

  const hidePopupHandler = () => {
    setShowAddItemPopup(false);
  };

  return (
    <>
      <header>
        <h1>Licznik gazu</h1>
        <button className="btn" onClick={showPopupHandler}>
          Dodaj
        </button>
      </header>
      <main>
        <ListItem items={records} />
        {showAddItemPopup && (
          <AddNewItem onAddItem={addRecordHandler} hide={hidePopupHandler} />
        )}
      </main>
    </>
  );
};

export default App;
