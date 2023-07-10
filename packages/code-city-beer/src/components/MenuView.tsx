import React, { useEffect, useState } from "react";
import BeerList from "./BeerList";
import { Beer } from "web-server/src/types";
import "./components.scss";
import { BeerService, LocalBeerService } from "@local/service-clients/build/beer-service";
import { LocalOrderService, OrderService } from "@local/service-clients/build/order-service";

type MenuViewProps = {
  table: string;
  orderName: string;
};

export default function MenuView(props: MenuViewProps) {
  // Don't use the new operator in useState!
  // It gets called on every render, but only the first instance is used
  const [beerSvc, setBeerSvc] = useState<BeerService>();
  if (!beerSvc) {
    setBeerSvc(new LocalBeerService("localhost:2001"));
  }

  const [orderSvc, setOrderSvc] = useState<OrderService>();
  if (!orderSvc) {
    setOrderSvc(new LocalOrderService("localhost:2001", props.table, props.orderName));
  }

  const [beerList, setBeerList] = useState<Beer[]>([]);

  const [error, setError] = useState<string>("");

  // This is being used to update the beer list after every order
  const [lastOrderTime, setLastOrderTime] = useState<number>(0);

  // We can use useEffect to fetch data from the server
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
  }, [beerSvc, lastOrderTime]);

  return (
    <div className="menu">
      <header>&#127866; Code City Beer List &#127866;</header>
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