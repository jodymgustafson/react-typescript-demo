import React, { useMemo } from "react";
import { OrderItem } from "web-server/src/types";

type OrderListProps = {
  orderItems: OrderItem[];
};

export default function OrderList(props: OrderListProps) {
  const totalDue = useMemo(() => {
    const ttl = props.orderItems.reduce((ttl, i) => ttl += i.count * i.costPerUnit, 0)
    return ttl.toFixed();
  }, [props.orderItems]);

  return (
    <div className="orders-list">
      {props.orderItems.length === 0 && <><span>There's nothing to see here!</span><span>&nbsp;</span></>}
      {props.orderItems.map(i =>
      <>
        <span className="descr">{i.itemName}</span>
        <span className="total">{i.count} @ ${i.costPerUnit} = ${i.count * i.costPerUnit}</span>
      </>
      )}
      <span>&nbsp;</span><span className="total due">Total Due: ${totalDue}</span>
    </div>
  );
}