import React from "react";
import BeerListItem from "./BeerListItem";
import { Beer } from "web-server/src/types";
import "./components.scss";

type BeerListProps = {
  beers: Beer[];
  onOrder: (id: string) => void;
};

export default function BeerList(props: BeerListProps) {
  return (
    <ul className="beer-list">
      {props.beers.map(beer => <BeerListItem key={beer.id} onOrder={props.onOrder} beer={beer}/>)}
    </ul>
  );
}