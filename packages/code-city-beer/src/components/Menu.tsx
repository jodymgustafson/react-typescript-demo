import React, { useEffect, useState } from "react";
import BeerList from "./BeerList";
import { Beer } from "web-server/src/types";
import "./components.scss";
import { BeerService, LocalBeerService } from "../services/beer-service";

type MenuProps = {
  table: string;
  orderName: string;
};

export default function Menu(props: MenuProps) {
  const [beerSvc, setBeerSvc] = useState<BeerService>();
  if (!beerSvc) {
    setBeerSvc(new LocalBeerService("localhost:2001"));
  }
  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [error, setError] = useState("");

  useEffect(() => {
    if (beerSvc) {
      setError("");
      beerSvc.list().then(list => {
        setBeerList(list);
      })
      .catch(e => {
        console.log("Error:", e.message);
        setError(e.message);
      });
    }
  }, [beerSvc])

  return (
    <div className="menu">
      <header>&#127866; Code City Beer List &#127866;</header>
      {error && <div className="error">Error fetching beer list: {error}</div>}
      <BeerList beers={beerList}/>
    </div>
  );
}