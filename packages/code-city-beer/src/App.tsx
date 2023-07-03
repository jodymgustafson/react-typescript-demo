import React, { useState } from 'react';
import './App.css';
import { Outlet } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <Outlet/>
      {/* {view === "home" && <WelcomeView onStartOrder={startOrder}/>}
      {view === "menu" && <MenuView table={table} orderName={orderName} onViewTab={() => setView("tab")}/>}
      {view === "tab" && <OrderView table={table} orderName={orderName} onClose={() => setView("menu")} onTabClosed={() => setView("home")}/>}
      {view === "beer" && <BeerDetails table={table} orderName={orderName} beerId='' />} */}
    </div>
  );
}

export default App;
