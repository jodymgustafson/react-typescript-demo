export type Beer = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    pintsRemaining: number;
    abv: string;
};

export type OrderRequest = {
    beerId: string;
    table: string;
    name: string;
};
