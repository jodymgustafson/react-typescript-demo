import { useEffect, useState } from "react";
import { OrderItem } from "web-server/src/types";
import { useOrderService } from "../hooks/useOrderService";
import DefaultContainer from "./DefaultContainer";
import OrderList from "./OrderList";
import { useOrderContext } from "../hooks/useOrderContext";
import { useNavigate } from "react-router-dom";

type OrderViewProps = {
};

export default function OrderView(props: OrderViewProps) {
  const context = useOrderContext();
  const orderSvc = useOrderService(context.table, context.orderName);
  const navigate = useNavigate();

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
      <DefaultContainer table={context.table} orderName={context.orderName}>
        <>{error && <div className="error">{error}</div>}</>
        <OrderList orderItems={orderItems} />
        <div className="actions">
          {orderItems.length > 0 && <button onClick={onPayClicked}>&#x2714; Pay Now</button>}
          <button onClick={() => navigate("/menu")}>&#x274C; Close</button>
        </div>
      </DefaultContainer>
    </div>
  );

  function onPayClicked(): void {
    setError("");
    orderSvc!.closeTab()
      .then(() => {
        toast("\u2714 Your tab has been closed successfully. Come back soon!")
        navigate("/");
      })
      .catch(err => {
        setError("Error closing tab, try again or speak with the manager: " + err.message);
      });
  }
}

function toast(msg: string): void {
  alert(msg);
}