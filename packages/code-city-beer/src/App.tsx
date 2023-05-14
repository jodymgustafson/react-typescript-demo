import React, { useState } from 'react';
import './App.css';
import Welcome from './components/welcome';

type ViewName = "home" | "beer-list";

function App() {
  const [view, setView] = useState<ViewName>("home");
  const [table, setTable] = useState("");
  const [orderName, setOrderName] = useState("");

  return (
    <div className="App">
      {view === "home" && <Welcome onStartOrder={startOrder}/>}
    </div>
  );

  function startOrder(table: string, orderName: string): void {
    setTable(table);
    setOrderName(orderName);
    setView("beer-list");
  }
}

export default App;
