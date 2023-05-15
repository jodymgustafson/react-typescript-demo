export type Beer = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    pintsRemaining: number;
    abv: string;
};

export type OrderId = {
    table: string;
    name: string;
};

export type OrderRequest = {
    beerId: string;
};
