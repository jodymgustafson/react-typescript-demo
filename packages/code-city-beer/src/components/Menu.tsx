import React, { useEffect, useState } from "react";
import BeerList from "./BeerList";
import { Beer } from "web-server/src/types";
import "./components.scss";
import { BeerService, LocalBeerService } from "../services/beer-service";
import { LocalOrderService, OrderService } from "../services/order-service";

type MenuProps = {
  table: string;
  orderName: string;
  onViewTab: () => void;
};

export default function Menu(props: MenuProps) {
  const [beerSvc, setBeerSvc] = useState<BeerService>();
  if (!beerSvc) {
    setBeerSvc(new LocalBeerService("localhost:2001"));
  }

  const [orderSvc, setOrderSvc] = useState<OrderService>();
  if (!orderSvc) {
    setOrderSvc(new LocalOrderService("localhost:2001", props.table, props.orderName));
  }

  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [error, setError] = useState("");
  const [lastOrderTime, setLastOrderTime] = useState(0);

  useEffect(() => {
    if (beerSvc) {
      setError("");
      beerSvc.list()
        .then(list => {
          setBeerList(list);
        })
        .catch(e => {
          console.log("Error:", e.message);
          setError("Error fetching beer list: " + e.message);
        });
    }
  }, [beerSvc, lastOrderTime])

  return (
    <div className="menu view">
      <header>&#127866; Code City Beer List &#127866;</header>
      <div className="tab-info">
        Table: {props.table}, Name: {props.orderName}
        <button onClick={props.onViewTab}>View/Pay your tab &#x2714;</button>
      </div>
      {error && <div className="error">{error}</div>}
      <BeerList beers={beerList} onOrder={onOrderBeer} />
    </div>
  );

  function onOrderBeer(id: string): void {
    orderSvc!.orderBeer(id)
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