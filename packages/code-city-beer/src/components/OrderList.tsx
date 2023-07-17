import React, { useMemo } from "react";
import { OrderItem } from "web-server/src/types";

type OrderListProps = {
  orderItems: OrderItem[];
};

export default function OrderList(props: OrderListProps) {
  const totalDue = useMemo<string>(() => {
    const ttl = props.orderItems.reduce((ttl, i) => ttl = ttl + i.count * i.costPerUnit, 0)
    return ttl.toFixed();
  }, [props.orderItems]);

  return (
    <div className="orders-list">
      {props.orderItems.length === 0 &&
      <>
        <span className="descr">I suggest you order a beer</span>
        <span className="total">$0</span>
      </>}
      {props.orderItems.map(i =>
        <React.Fragment key={i.itemId}>
          <span className="descr">{i.itemName}</span>
          <span className="total">{i.count} @ ${i.costPerUnit} = ${i.count * i.costPerUnit}</span>
        </React.Fragment>
      )}
      <span>&nbsp;</span><span className="total due">Total Due: ${totalDue}</span>
    </div>
  );
}