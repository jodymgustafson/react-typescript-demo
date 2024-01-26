import { useRef } from "react";

export type OrderContext = {
    table: string;
    orderName: string;
};

const globalContext: OrderContext = {
    table: "",
    orderName: ""
};

/**
 * Gets an object containing the customer's table and name which is used
 * to identify them in the order service
 */
export function useOrderContext(): OrderContext {
    const context = useRef<OrderContext>();
    if (!context.current) {
        context.current = globalContext;
    }

    return context.current;
}