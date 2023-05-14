import { OrderRequest } from "./types";

const orderData: Record<string, OrderRequest[]> = {};

export interface OrdersRepository {
    get(table: string): OrderRequest[];
    addOrder(table: string, order: OrderRequest): void;
    deleteOrder(table: string): void;
}

export class MockOrdersRepository implements OrdersRepository {
    get(table: string): OrderRequest[] {
        return orderData[table];
    }

    addOrder(table: string, order: OrderRequest): void {
        const orders = orderData[table] ?? (orderData[table] = []);
        orders.push(order);
    }

    deleteOrder(table: string): void {
        const orders = orderData[table];
        if (orders) {
            delete orderData[table];
        }
    }
}
