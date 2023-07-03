import { useEffect, useState } from "react";
import { Beer } from "web-server/src/types";
import { useBeerService } from "../hooks/useBeerService";
import { useOrderService } from "../hooks/useOrderService";
import BeerList from "./BeerList";
import DefaultContainer from "./DefaultContainer";
import "./components.scss";
import { Link } from "react-router-dom";
import { useOrderContext } from "../hooks/useOrderContext";

type MenuViewProps = {
};

export default function MenuView(props: MenuViewProps) {
  const context = useOrderContext();
  const beerSvc = useBeerService();
  const orderSvc = useOrderService(context.table, context.orderName);

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
      <DefaultContainer table={context.table} orderName={context.orderName}>
        <Link to="/tab">View/Pay your tab &#x2714;</Link>
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