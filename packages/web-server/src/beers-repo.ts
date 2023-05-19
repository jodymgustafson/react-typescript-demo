import { Beer } from "./types";

const beerData: Beer[] = [
    {
        id: "1",
        name: "Asteroids Amber Ale",
        description: "A amber hued ale with notes of asteroid dust and rocket fuel.",
        abv: "5.6%",
        pintsRemaining: getRandomAmount(),
        imageUrl: "asteroids.webp",
        price: 6
    },
    {
        id: "2",
        name: "Centipede Stout",
        description: "A dark beer with a deep nutty taste of roasted insects and mushrooms.",
        abv: "6.6%",
        pintsRemaining: getRandomAmount(),
        imageUrl: "centipede.webp",
        price: 7
    },
    {
        id: "4",
        name: "Galaga Lager",
        description: "Clear and crisp with a foamy head, and the taste of alien butt being blown to bits.",
        abv: "4.8%",
        pintsRemaining: getRandomAmount(),
        imageUrl: "galaga.webp",
        price: 5
    },
    {
        id: "6",
        name: "Ms. Pac-Man Fruit Ale",
        description: "A fruity ale with berries, cherries and a hint of ghost pepper. A sophisticated yet down-to-earth brew.",
        abv: "5.9%",
        pintsRemaining: getRandomAmount(),
        imageUrl: "ms-pac-man.webp",
        price: 7
    },
    {
        id: "3",
        name: "Pac-Man Pale Ale",
        description: "A delightfully pleasant yellow hued ale--I ain't afraid of no ghosts.",
        abv: "5.8%",
        pintsRemaining: getRandomAmount(),
        imageUrl: "pac-man.webp",
        price: 6
    },
    {
        id: "5",
        name: "Space Invaders IPA",
        description: "A hopped up ale with hints of pine and grapefruit--just the thing for taking on an alien invasion.",
        abv: "7.2%",
        pintsRemaining: getRandomAmount(),
        imageUrl: "invaders.webp",
        price: 6
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

function getRandomAmount(): number {
    return Math.floor(Math.random() * 90 + 10);
}
