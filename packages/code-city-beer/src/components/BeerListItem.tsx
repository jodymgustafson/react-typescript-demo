import React from "react";
import { useNavigate } from "react-router-dom";
import { Beer } from "web-server/src/types";

type BeerListItemProps = {
  beer: Beer;
  onOrder: (id: string) => void;
}

export default function BeerListItem(props: BeerListItemProps) {
  const navigate = useNavigate();

  const beer = props.beer;
  return (
    <li onClick={() => navigate("/beer/" + beer.id)}>
      <img src={beer.imageUrl} alt={beer.name} />
      <div>
        <header>{beer.name}</header>
        <div className="description">{beer.description}</div>
        <div className="info">Price: ${beer.price}, ABV: {beer.abv}</div>
        <div className="info">
          {beer.pintsRemaining > 0 &&
            <>
              Pints Remaining: {beer.pintsRemaining}
              <button onClick={e =>{ e.stopPropagation(); props.onOrder(beer.id); }}>Order &#x2714;</button>
            </>
          }
          {beer.pintsRemaining === 0 && <span className="error">Sold Out!</span>}
        </div>
      </div>
    </li>
  );
}