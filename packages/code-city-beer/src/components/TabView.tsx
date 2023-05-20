import React, { useEffect, useState } from "react";
import { LocalOrderService, OrderService } from "../services/order-service";
import OrderList from "./OrderList";
import { OrderItem } from "web-server/src/types";

type TabViewProps = {
  table: string;
  orderName: string;
  onClose: () => void;
  onTabClosed: () => void;
};

export default function TabView(props: TabViewProps) {
  const [orderSvc, setOrderSvc] = useState<OrderService>();
  if (!orderSvc) {
    setOrderSvc(new LocalOrderService("localhost:2001", props.table, props.orderName));
  }

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
      <header>&#127866; Code City Beer Tab &#127866;</header>
      <div className="tab-info">
        Table: {props.table}, Name: {props.orderName}
      </div>
      {error && <div className="error">{error}</div>}
      <OrderList orderItems={orderItems}/>
      <div className="actions">
        {orderItems.length > 0 && <button onClick={onPayClicked}>&#x2714; Pay Now</button>}
        <button onClick={props.onClose}>&#x274C; Close</button>
      </div>
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