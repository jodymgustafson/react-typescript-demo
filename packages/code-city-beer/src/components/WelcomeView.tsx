import React, { useState } from "react";

type WelcomeProps = {
};

export default function Welcome(props: WelcomeProps) {
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
        <select autoFocus>
          <option></option>
          <option>1</option>
          <option>2</option>
          <option>3</option>
          <option>4</option>
          <option>5</option>
        </select>
        <label>Your Name</label>
        <input type="text" />
      </div>
      <div>
        <button>Start Order &#127866;</button>
      </div>
    </div>
  );
}