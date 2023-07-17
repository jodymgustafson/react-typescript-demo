import { useEffect, useState } from "react";
import { Beer } from "web-server/src/types";
import { useBeerService } from "../hooks/useBeerService";
import { useOrderService } from "../hooks/useOrderService";
import BeerList from "./BeerList";
import DefaultContainer from "./DefaultContainer";
import "./components.scss";

type MenuViewProps = {
  table: string;
  orderName: string;
  onViewTab: () => void;
};

export default function MenuView(props: MenuViewProps) {
  const beerSvc = useBeerService();
  const orderSvc = useOrderService(props.table, props.orderName);

  const [beerList, setBeerList] = useState<Beer[]>([]);
  const [error, setError] = useState<string>("");
  const [lastOrderTime, setLastOrderTime] = useState<number>(0);

  useEffect(() => {
    setError("");
    beerSvc.list()
      .then(list => {
        setBeerList(list);
      })
      .catch(e => {
        console.log("Error:", e.message);
        setError("Error fetching beer list: " + e.message);
      });
  }, [beerSvc, lastOrderTime]);

  return (
    <div className="menu view">
      <DefaultContainer table={props.table} orderName={props.orderName}>
        <button onClick={props.onViewTab}>View/Pay your tab &#x2714;</button>
        <>{error && <div className="error">{error}</div>}</>
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
        setError("There was a problem with your order: " + err.message);
      });
  }

  function toast(message: string): void {
    alert(message);
  }
}