import React from "react";
import BeerListItem from "./BeerListItem";
import { Beer } from "web-server/src/types";

type BeerListProps = {
  beers: Beer[];
  onOrder: (id: string) => void;
};

export default function BeerList(props: BeerListProps) {
  return (
    <ul className="beer-list">
      {props.beers.map(beer => <BeerListItem onOrder={props.onOrder} beer={beer}/>)}
    </ul>
  );
}