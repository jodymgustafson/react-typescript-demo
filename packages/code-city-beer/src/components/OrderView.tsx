import { useEffect, useState } from "react";
import { OrderItem } from "web-server/src/types";
import { useOrderService } from "../hooks/useOrderService";
import DefaultContainer from "./DefaultContainer";
import OrderList from "./OrderList";

type OrderViewProps = {
  table: string;
  orderName: string;
  onClose: () => void;
  onTabClosed: () => void;
};

export default function OrderView(props: OrderViewProps) {
  const orderSvc = useOrderService(props.table, props.orderName);

  const [error, setError] = useState("");
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);

  useEffect(() => {
    if (orderSvc) {
      orderSvc.getTab()
        .then(items => setOrderItems(items))
        .catch(err => {
          setError(err);
          setOrderItems([]);
        });
    }
  }, [orderSvc]);

  return (
    <div className="tab view">
      <DefaultContainer table={props.table} orderName={props.orderName}>
        <>{error && <div className="error">{error}</div>}</>
        <OrderList orderItems={orderItems} />
        <div className="actions">
          {orderItems.length > 0 && <button onClick={onPayClicked}>&#x2714; Pay Now</button>}
          <button onClick={props.onClose}>&#x274C; Close</button>
        </div>
      </DefaultContainer>
    </div>
  );

  function onPayClicked(): void {
    setError("");
    orderSvc!.closeTab()
      .then(() => {
        toast("\u2714 Your tab has been closed successfully. Come back soon!")
        props.onTabClosed();
      })
      .catch(err => {
        setError("Error closing tab, try again or speak with the manager: " + err.message);
      });
  }
}

function toast(msg: string): void {
  alert(msg);
}