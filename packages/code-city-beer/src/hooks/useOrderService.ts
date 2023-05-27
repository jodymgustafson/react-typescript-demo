import { LocalOrderService, OrderService } from "@local/service-clients/build/order-service";
import { useState } from "react";

export function useOrderService(table: string, orderName: string): OrderService {
    const [orderSvc, setOrderSvc] = useState<OrderService>();
    if (!orderSvc) {
        setOrderSvc(new LocalOrderService("localhost:2001", table, orderName));
    }

    return orderSvc!;
}