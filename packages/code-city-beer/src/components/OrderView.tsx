import React from "react";

type TabViewProps = {
  table: string;
  orderName: string;
};

export default function TabView(props: TabViewProps) {
  return (
    <div className="tab view">
      <header>&#127866; Code City Beer Tab &#127866;</header>
      <div className="tab-info">
        Table: 1, Name: Your Name
      </div>
      <div className="orders-list">
        <span className="descr">Galaga Lager</span> <span className="total">1 @ $6 = $6</span>
        <span className="descr">Centipede Stout</span> <span className="total">2 @ $6 = $12</span>
        <span>&nbsp;</span><span className="total due">Total Due: $18</span>
      </div>
      <div className="actions">
        <button>&#x2714; Pay Now</button>
        <button>&#x274C; Close</button>
      </div>
    </div>
  );
}