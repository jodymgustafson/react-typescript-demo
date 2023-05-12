import express, { Request, Response } from 'express';

const beers = [
    { id: "1", name: "Asteroids Amber Ale", available: true },
    { id: "2", name: "Centipede Stout", available: true },
    { id: "3", name: "Pacman Pale Ale", available: true },
    { id: "4", name: "Galaga Lager", available: true },
    { id: "5", name: "Space Invaders IPA", available: true },
];

export function list(req: Request, res: Response) {
    res.send(beers);
}

export function get(req: Request, res: Response) {
    const id = req.params.id;
    const beer = beers.find(b => b.id === id);
    if (beer)
        res.send(beer);
    else
        res.sendStatus(404);
}
