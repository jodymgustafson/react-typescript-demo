import { OrderId, OrderRequest } from "./types";

const orderData: Record<string, OrderRequest[]> = {};

export interface OrdersRepository {
    get(id: OrderId): OrderRequest[];
    addOrder(id: OrderId, order: OrderRequest): void;
    deleteOrder(id: OrderId): void;
}

export class MockOrdersRepository implements OrdersRepository {
    get(id: OrderId): OrderRequest[] {
        return orderData[getRecordId(id)];
    }

    addOrder(id: OrderId, order: OrderRequest): void {
        const recordId = getRecordId(id);
        const orders = orderData[recordId] ?? (orderData[recordId] = []);
        orders.push(order);
    }

    deleteOrder(id: OrderId): void {
        const recordId = getRecordId(id);
        const orders = orderData[recordId];
        if (orders) {
            delete orderData[recordId];
        }
    }
}

function getRecordId(id: OrderId): string {
    return id.table + "/" + id.name;
}

