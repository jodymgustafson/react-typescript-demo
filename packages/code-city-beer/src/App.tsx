import React, { useState } from 'react';
import './App.css';
import WelcomeView from './components/WelcomeView';

type ViewName = "home" | "beer-list";

function App() {
  const [view, setView] = useState<ViewName>("home");
  const [table, setTable] = useState("");
  const [orderName, setOrderName] = useState("");

  return (
    <div className="App">
      {view === "home" && <WelcomeView onStartOrder={startOrder}/>}
    </div>
  );

  function startOrder(table: string, orderName: string): void {
    setTable(table);
    setOrderName(orderName);
    setView("beer-list");
  }
}

export default App;
