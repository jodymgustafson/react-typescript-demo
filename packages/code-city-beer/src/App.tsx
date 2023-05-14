import React, { useState } from 'react';
import './App.css';
import Welcome from './components/welcome';

function App() {
  const [view, setView] = useState("");

  return (
    <div className="App">
      {view === "" && <Welcome onStartOrder={startOrder}/>}
    </div>
  );

  function startOrder(): void {
    setView("beer-list");
  }
}

export default App;
