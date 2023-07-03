import React, { useEffect, useState } from "react";
import "./components.scss";
import { useNavigate } from "react-router-dom";

type WelcomeViewProps = {
  onStartOrder: (table: string, orderName: string) => void;
};

export default function WelcomeView(props: WelcomeViewProps) {
  const [table, setTable] = useState("");
  const [orderName, setOrderName] = useState("");
  const navigate = useNavigate();
  
  useEffect(() => {
    // Hitting enter == clicking start button
    const eventHandler = (e: KeyboardEvent) => {
      if (e.key === "Enter") onStartOrder();
    };
    window.addEventListener("keyup", eventHandler);
    
    // Return a cleanup function
    return () => window.removeEventListener("keyup", eventHandler);  
  });

  return (
    <div className="welcome view">
      <header>
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
        <button disabled={!(orderName && table)} onClick={onStartOrder}>Start Order &#127866;</button>
      </div>
    </div>
  );

  function onStartOrder(): void {
    if (table && orderName) {
      props.onStartOrder(table, orderName);
      navigate("/menu");
    }
  }
}