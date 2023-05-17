import React, { useState } from 'react';
import './App.css';
import Welcome from './components/Welcome';
import Menu from './components/Menu';
import TabView from './components/TabView';

type ViewName = "home" | "menu" | "tab";

function App() {
  const [view, setView] = useState<ViewName>("home");
  const [table, setTable] = useState("");
  const [orderName, setOrderName] = useState("");

  return (
    <div className="App">
      {view === "home" && <Welcome onStartOrder={startOrder}/>}
      {view === "menu" && <Menu table={table} orderName={orderName} onViewTab={() => setView("tab")}/>}
      {view === "tab" && <TabView table={table} orderName={orderName} onClose={() => setView("menu")} onTabClosed={() => setView("home")}/>}
    </div>
  );

  function startOrder(table: string, orderName: string): void {
    setTable(table);
    setOrderName(orderName);
    setView("menu");
  }
}

export default App;
