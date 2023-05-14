import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Menu from './components/Menu';

type ViewName = "home" | "menu";

function App() {
  const [view, setView] = useState<ViewName>("home");
  const [table, setTable] = useState("");
  const [orderName, setOrderName] = useState("");

  return (
    <div className="App">
      {view === "home" && <Welcome onStartOrder={startOrder}/>}
      {view === "menu" && <Menu table={table} orderName={orderName}/>}
    </div>
  );

  function startOrder(table: string, orderName: string): void {
    setTable(table);
    setOrderName(orderName);
    setView("menu");
  }
}

export default App;
