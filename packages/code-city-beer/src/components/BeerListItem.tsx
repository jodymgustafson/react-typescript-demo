import React from "react";
import { Beer } from "web-server/src/types";

export default function BeerListItem(props: Beer) {
  return (
    <li>
      <img src={props.imageUrl} alt={props.name} />
      <div>
        <header>{props.name}</header>
        <div className="abv">ABV: {props.abv}</div>
        <div className="description">{props.description}</div>
      </div>
    </li>
  );
}