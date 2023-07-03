import React, { useEffect, useState } from "react";
import { Beer } from "web-server/src/types";
import { useBeerService } from "../hooks/useBeerService";
import DefaultContainer from "./DefaultContainer";
import { useOrderContext } from "../hooks/useOrderContext";
import { Link, useParams } from "react-router-dom";
import { useOrderService } from "../hooks/useOrderService";

export default function BeerDetailsView() {
  const context = useOrderContext();
  const svc = useBeerService();
  const orderSvc = useOrderService(context.table, context.orderName);
  const [beer, setBeer] = useState<Beer>();
  const [error, setError] = useState<string>("");
  const [lastOrderTime, setLastOrderTime] = useState(0);
  let { beerId } = useParams();

  useEffect(() => {
    if (beerId) {
      setError("");
      svc.getBeer(beerId)
        .then(setBeer)
        .catch(e => setError(e.message));
    }
  }, [beerId, svc, lastOrderTime]);

  return (
    <div className="beer view">
      <DefaultContainer table={context.table} orderName={context.orderName}>
        <div className="beer-details">
          {error && <div className="error">Error: {error}</div>}
          {!beer && !error && <div>Loading...</div>}
          {beer && <>
            <img src={"/" + beer.imageUrl} alt={beer.name} />
            <div>
              <header>{beer.name}</header>
              <div className="description">{beer.description}</div>
              <div className="info">
                <ul>
                  <li>Price: ${beer.price}</li>
                  <li>ABV: {beer.abv}</li>
                  <li>Pints Remaining: {beer.pintsRemaining}</li>
                </ul>
                {beer.pintsRemaining > 0 &&
                  <p>
                    <button onClick={onOrderBeer}>Order &#x2714;</button>
                  </p>
                }
                {beer.pintsRemaining === 0 && <span className="error">Sold Out!</span>}
                <Link to="/menu">&lt;&lt; All beers</Link>
              </div>
            </div>
          </>}
        </div>
      </DefaultContainer>
    </div>
  );

  function onOrderBeer(): void {
    orderSvc!.orderBeer(beerId!)
      .then(() => {
        setLastOrderTime(Date.now());
        toast("Your beer is on the way!");
      })
      .catch(err => {
        setError("There was a problem with your order: " + err.message);
      });
  }

  function toast(message: string): void {
    alert(message);
  }
}