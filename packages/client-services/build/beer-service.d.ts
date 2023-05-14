import { Beer } from "web-server/src/types";
export interface BeerService {
    list(): Promise<Beer[]>;
    getBeer(id: string): Promise<Beer>;
}
export declare class LocalBeerService implements BeerService {
    readonly server: string;
    constructor(server: string);
    list(): Promise<Beer[]>;
    getBeer(id: string): Promise<Beer>;
}
