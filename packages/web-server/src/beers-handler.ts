import { Request, Response, Express } from 'express';
import { BeerRepository, MockBeerRepository } from './beers-repo';

const repo: BeerRepository = new MockBeerRepository();

export function initPaths(app: Express): void {
    app.get('/beers', list);
    app.get('/beers/:id', get);
}

function list(_: Request, res: Response): void {
    res.send({
        beers: repo.list()
    });
}

function get(req: Request, res: Response): void {
    const beer = repo.get(req.params.id)
    if (beer)
        res.send(beer);
    else
        res.sendStatus(400);
}
