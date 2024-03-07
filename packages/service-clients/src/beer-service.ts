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
        
        return await this.doFetch<any>(this.url)
            .then(r => r.beers);
    }

    async getBeer(id: string): Promise<Beer> {
        const url = this.url + "/" + id;
        console.log("Getting beer from", url);
        
        return await this.doFetch(url);
    }

    private async doFetch<T>(url: string): Promise<T> {
        return await fetch(url, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
              }
        } as unknown as Request)
        .then(r => {
            if (r.ok) return r.json();
            else throw new Error(r.statusText);
        });
    }
}