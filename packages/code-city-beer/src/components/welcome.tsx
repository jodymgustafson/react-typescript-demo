import React, { useState } from "react";

type WelcomeProps = {
  onStartOrder: () => void;
};

export default function Welcome(props: WelcomeProps) {
  const [table, setTable] = useState("");
  const [orderName, setOrderName] = useState("");

  return (
    <div className="welcome view">
      <header className="App-header">
        <img src="/ccb-logo.webp" className="App-logo" alt="logo" />
        <h1>
          Welcome to Code City Beer!
        </h1>
      </header>
      <div>
        To get started select your table number and enter your name.
      </div>
      <div className="start-data">
        <label>Table</label>
        <select autoFocus value={table} onChange={e => setTable(e.target.value)}>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label>Your Name</label>
        <input type="text" value={orderName} onChange={e => setOrderName(e.target.value)} />
      </div>
      <div>
        <button disabled={!(orderName && table)} onClick={props.onStartOrder}>Start Order &#127866;</button>
      </div>
    </div>
  );
}