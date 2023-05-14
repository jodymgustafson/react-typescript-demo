import { Beer } from "web-server/src/types";

export interface BeerService {
    list(): Promise<Beer[]>;
    getBeer(id: string): Promise<Beer>;
}

export class LocalBeerService implements BeerService {
    constructor(readonly server: string) {}

    async list(): Promise<Beer[]> {
        const url = "http://" + this.server + "/beers";
        console.log("Getting beers from", url);
        
        return await fetch(url, {
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

    async getBeer(id: string): Promise<Beer> {
        throw new Error("Method not implemented.");
    }
}