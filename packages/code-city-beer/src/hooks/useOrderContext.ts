import { useRef } from "react";

export type OrderContext = {
    table: string;
    orderName: string;
};

const globalContext: OrderContext = {
    table: "",
    orderName: ""
};

export function useOrderContext(): OrderContext {
    const context = useRef<OrderContext>();
    if (!context.current) {
        context.current = globalContext;
    }

    return context.current;
}