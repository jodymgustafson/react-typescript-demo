import { OrderRequest } from "web-server/src/types";

export interface OrderService {
    orderBeer(beerId: string): Promise<void>;
    getTab(): Promise<OrderRequest[]>;
    closeTab(): Promise<void>;
}

export class LocalOrderService implements OrderService {
    private readonly url: string;

    constructor(readonly serverName: string, readonly table: string, readonly orderName: string) {
        this.url = `http://${this.serverName}/orders/${this.table}/${this.orderName}`;
    }

    async orderBeer(beerId: string): Promise<void> {
        console.log("Calling", this.url);
        await fetch(this.url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify({ beerId })
        } as unknown as Request)
            .then(r => {
                console.log("Get beers", r);
            });
    }

    async getTab(): Promise<OrderRequest[]> {
        console.log("Calling", this.url);
        return await fetch(this.url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        } as unknown as Request)
            .then(r => {
                console.log("Get beers", r);
                return r.json();
            });
    }

    async closeTab(): Promise<void> {
        throw new Error("Method not implemented.");
    }
}