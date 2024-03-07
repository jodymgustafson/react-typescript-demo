import { OrderItem } from "web-server/src/types";

export interface OrderService {
    orderBeer(beerId: string): Promise<void>;
    getTab(): Promise<OrderItem[]>;
    closeTab(): Promise<void>;
}

export class LocalOrderService implements OrderService {
    private readonly url: string;

    constructor(readonly serverName: string, readonly table: string, readonly orderName: string) {
        this.url = `http://${this.serverName}/orders/${this.table}/${this.orderName}`;
    }

    async orderBeer(beerId: string): Promise<void> {
        console.log("Calling", this.url);
        await this.doFetch("POST", JSON.stringify({ beerId }))
            .then(() => {
                console.log("Beer ordered", beerId);
            });
    }

    async getTab(): Promise<OrderItem[]> {
        console.log("Calling", this.url);
        return await this.doFetch("GET")
            .then(r => r.json())
            .then(r => r.items);
    }

    async closeTab(): Promise<void> {
        console.log("Calling", this.url);
        await this.doFetch("DELETE")
            .then(() => {
                console.log("Tab closed");
            });
    }

    private async doFetch(method: string, body?: any): Promise<Response> {
        return await fetch(this.url, {
            method,
            headers: {
                "Content-Type": "application/json",
            },
            body
        } as unknown as Request);
    }
}