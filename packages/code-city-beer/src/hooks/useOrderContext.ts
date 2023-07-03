export type OrderContext = {
    table: string;
    orderName: string;
};

export let context: OrderContext = {
    table: "",
    orderName: ""
};

export function useOrderContext(): OrderContext {
    return context;
}