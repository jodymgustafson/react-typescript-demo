import { Beer } from "./types";

const beerData: Beer[] = [
    {
        id: "1",
        name: "Asteroids Amber Ale",
        description: "A amber hued ale with notes of asteroid dust and rocket fuel.",
        abv: "5.6%",
        pintsRemaining: 100,
        imageUrl: "asteroids.webp"
    },
    {
        id: "2",
        name: "Centipede Stout",
        description: "A dark beer with a deep nutty taste of roasted insects and mushrooms.",
        abv: "6.6%",
        pintsRemaining: 100,
        imageUrl: "centipede.webp"
    },
    {
        id: "3",
        name: "Pac-Man Pale Ale",
        description: "A delightfully pleasant yellow hued ale--I ain't afraid of no ghost.",
        abv: "4.8%",
        pintsRemaining: 100,
        imageUrl: "pac-man.webp"
    },
    {
        id: "4",
        name: "Galaga Lager",
        description: "Clear and crisp with a foamy head, and the taste of alien butt being blown to bits.",
        abv: "5.8%",
        pintsRemaining: 100,
        imageUrl: "galaga.webp"
    },
    {
        id: "5",
        name: "Space Invaders IPA",
        description: "A hopped up ale with hints of pine and grapefruit--just the thing for taking on an alien invasion.",
        abv: "7.2%",
        pintsRemaining: 100,
        imageUrl: "invaders.webp"
    },
    {
        id: "6",
        name: "Ms. Pac-Man Fruit Ale",
        description: "A fruity ale with berries, cherries and a hint of ghost pepper. A sophisticated yet down-to-earth brew.",
        abv: "5.9%",
        pintsRemaining: 100,
        imageUrl: "ms-pac-man.webp"
    },
];

export interface BeerRepository {
    get(id: string): Beer | undefined;
    list(): Beer[];
    update(beer: Beer): void;
}

export class MockBeerRepository implements BeerRepository {
    get(id: string): Beer | undefined {
        return beerData.find(b => b.id === id);
    }

    list(): Beer[] {
        return beerData;
    }

    update(beer: Beer): void {
        beerData[parseInt(beer.id) - 1] = beer;
    }
}