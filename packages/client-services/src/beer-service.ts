import { Beer } from "web-server/src/types";

export interface BeerService {
    list(): Promise<Beer[]>;
    getBeer(id: string): Promise<Beer>;
}

export class LocalBeerService implements BeerService {
    constructor(readonly serverName: string) {}

    async list(): Promise<Beer[]> {
        const url = "http://" + this.serverName + "/beers";
        console.log("Getting beers from", url);
        
        return await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
              }
        } as unknown as Request)
        .then(r => r.json())
        .then(r => r.beers);
    }

    async getBeer(id: string): Promise<Beer> {
        throw new Error("Method not implemented.");
    }
}