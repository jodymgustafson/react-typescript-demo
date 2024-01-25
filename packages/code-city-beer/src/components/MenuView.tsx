import { useEffect, useState, useRef } from "react";
import { Beer } from "web-server/src/types";
import { useOrderService } from "../hooks/useOrderService";
import BeerList from "./BeerList";
import DefaultContainer from "./DefaultContainer";
import "./components.scss";
import { BeerService, LocalBeerService } from "@local/service-clients/build/beer-service";

type MenuViewProps = {
  table: string;
  orderName: string;
  onViewTab: () => void;
};

export default function MenuView(props: MenuViewProps) {
  const orderSvc = useOrderService(props.table, props.orderName);
  
  const beerSvc = useRef<BeerService>();
  if (!beerSvc.current) {
    beerSvc.current = new LocalBeerService(window.location.hostname + ":2001");
  }

  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [errorMsg, setErrorMsg] = useState<string>("");
  // This will cause the beer list to get updated after a beer is ordered
  const [lastOrderTime, setLastOrderTime] = useState<number>(0);

  useEffect(() => {
    setErrorMsg("");
    beerSvc.current!.list()
      .then(list => {
        setBeerList(list);
      })
      .catch(e => {
        console.log("Error:", e.message);
        setErrorMsg("Error fetching beer list: " + e.message);
      });
  }, [lastOrderTime]);

  return (
    <div className="menu view">
      <DefaultContainer table={props.table} orderName={props.orderName}>
        <button onClick={props.onViewTab}>View/Pay your tab &#x2714;</button>
        <>{errorMsg && <div className="error">{errorMsg}</div>}</>
        <BeerList beers={beerList} onOrder={onOrderBeer} />
      </DefaultContainer>
    </div>
  );

  function onOrderBeer(id: string): void {
    orderSvc!.orderBeer(id)
      .then(() => {
        setLastOrderTime(Date.now());
        toast("Your beer is on the way!");
      })
      .catch(err => {
        setErrorMsg("There was a problem with your order: " + err.message);
      });
  }

  function toast(message: string): void {
    alert(message);
  }
}