import { LocalOrderService, OrderService } from "@local/service-clients/build/order-service";
import { useRef } from "react";

export function useOrderService(table: string, orderName: string): OrderService {
    const orderSvc = useRef<OrderService>();
    if (!orderSvc.current) {
        orderSvc.current = new LocalOrderService("localhost:2001", table, orderName);
    }

    return orderSvc.current;
}