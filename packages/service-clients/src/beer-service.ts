import { Beer } from "web-server/src/types";

export interface BeerService {
    list(): Promise<Beer[]>;
    getBeer(id: string): Promise<Beer>;
}

export class LocalBeerService implements BeerService {
    private readonly url: string;

    constructor(readonly serverName: string) {
        this.url = `http://${this.serverName}/beers`;
    }

    async list(): Promise<Beer[]> {
        console.log("Getting beers from", this.url);
        
        return await fetch(this.url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
              }
        } as unknown as Request)
        .then(r => r.json())
        .then(r => r.beers);
    }

    async getBeer(id: string): Promise<Beer> {
        const url = this.url + "/" + id;
        console.log("Getting beer from", url);
        
        return await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
              }
        } as unknown as Request)
        .then(r => r.json());
    }
}