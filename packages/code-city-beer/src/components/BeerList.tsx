import React from "react";
import BeerListItem from "./BeerListItem";

type BeerListProps = {
};

export default function BeerList(props: BeerListProps) {
  return (
    <ul className="beer-list">
      <BeerListItem
        name="Beer Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et gravida diam, ut commodo justo. "
        imageUrl="beer.webp"
        abv="5%"/>
      <BeerListItem
        name="Beer Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et gravida diam, ut commodo justo. "
        imageUrl="beer.webp"
        abv="5%"/>
      <BeerListItem
        name="Beer Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et gravida diam, ut commodo justo. "
        imageUrl="beer.webp"
        abv="5%"/>
      <BeerListItem
        name="Beer Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et gravida diam, ut commodo justo. "
        imageUrl="beer.webp"
        abv="5%"/>
      <BeerListItem
        name="Beer Name"
        description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse et gravida diam, ut commodo justo. "
        imageUrl="beer.webp"
        abv="5%"/>
    </ul>
  );
}