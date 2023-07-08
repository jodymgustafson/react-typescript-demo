import React from "react";
import BeerList from "./BeerList";
import "./components.scss";

type MenuProps = {
  table: string;
  orderName: string;
};

export default function Menu(props: MenuProps) {
  return (
    <div className="menu">
      <header>&#127866; Code City Beer List &#127866;</header>
      <BeerList />
    </div>
  );
}