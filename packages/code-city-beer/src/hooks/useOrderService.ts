import { LocalOrderService, OrderService } from "@local/service-clients/build/order-service";
import { useRef } from "react";

/**
 * Gets an instance of the order service
 * @param table Customer's table id
 * @param orderName Customer's name
 */
export function useOrderService(table: string, orderName: string): OrderService {
    const orderSvc = useRef<OrderService>();
    if (!orderSvc.current) {
        orderSvc.current = new LocalOrderService(window.location.hostname + ":2001", table, orderName);
    }

    return orderSvc.current;
}