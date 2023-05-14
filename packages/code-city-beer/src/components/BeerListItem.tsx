import React from "react";

type BeerListItemProps = {
  name: string;
  description: string;
  abv: string;
  imageUrl: string;
};

export default function BeerListItem(props: BeerListItemProps) {
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