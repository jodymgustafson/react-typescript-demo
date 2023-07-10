import React, { useState } from 'react';
import './App.css';
import WelcomeView from './components/WelcomeView';
import MenuView from './components/MenuView';

type ViewName = "home" | "menu";

function App() {
  const [view, setView] = useState<ViewName>("home");
  const [table, setTable] = useState("");
  const [orderName, setOrderName] = useState("");

  return (
    <div className="App">
      {view === "home" && <WelcomeView onStartOrder={startOrder}/>}
      {view === "menu" && <MenuView table={table} orderName={orderName}/>}
    </div>
  );

  function startOrder(table: string, orderName: string): void {
    setTable(table);
    setOrderName(orderName);
    setView("menu");
  }
}

export default App;
