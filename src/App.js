import React, { useEffect } from "react";
import { useState } from "react";

import "./App.css";
import AddNewItem from "./components/AddNewItem";
import ListItem from "./components/ListItem";

const App = () => {
  const [records, setRecords] = useState([]);
  const [showAddItemPopup, setShowAddItemPopup] = useState(false);
  const [selectedRecord, setSelectedRecord] = useState(null);

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

  const onDeleteHandler = () => {
    if (!selectedRecord) return;

    const confirmDelete = window.confirm("Czy na pewno chcesz usunąć rekord?");

    console.log(confirmDelete);

    if (!confirmDelete) return;
    const idToDelete = selectedRecord;
    setRecords((prevRecords) => {
      const updatedRecords = prevRecords.filter(
        (record) => record.id !== idToDelete
      );
      localStorage.setItem("records", JSON.stringify(updatedRecords));
      setSelectedRecord(null);
      return updatedRecords;
    });
  };

  return (
    <>
      <header>
        <button className="btn" onClick={onDeleteHandler}>
          Usuń
        </button>
        <h1>Licznik gazu</h1>
        <button className="btn" onClick={showPopupHandler}>
          Dodaj
        </button>
      </header>
      <main>
        <ListItem
          items={records}
          selected={selectedRecord}
          setSelected={setSelectedRecord}
        />
        {showAddItemPopup && (
          <AddNewItem onAddItem={addRecordHandler} hide={hidePopupHandler} />
        )}
      </main>
    </>
  );
};

export default App;
