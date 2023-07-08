export type Beer = {
    id: string;
    name: string;
    description: string;
    imageUrl: string;
    pintsRemaining: number;
    abv: string;
    price: number;
};

export type OrderId = {
    table: string;
    name: string;
};

export type OrderRequest = {
    beerId: string;
};

export type OrderItem = {
    itemName: string;
    itemId: string;
    costPerUnit: number;
    count: number;
}