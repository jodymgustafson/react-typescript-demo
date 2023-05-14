import { Request, Response, Express } from 'express';
import { BeerRepository, MockBeerRepository } from './beers-repo';
import { OrderRequest } from './types';
import { MockOrdersRepository, OrdersRepository } from './orders-repo';

const ordersRepo: OrdersRepository = new MockOrdersRepository();
const beersRepo: BeerRepository = new MockBeerRepository();

// curl -d "beerId=2&table=1&name=jay" http://localhost:2001/orders

export function initPaths(app: Express): void {
    app.get('/orders/:table', get);
    app.post('/orders', order);
    app.delete('/orders/:table', completeOrder)
}

function get(req: Request, res: Response): void {
    const orders = ordersRepo.get(req.params.table);
    res.send(orders ?? []);
}

function order(req: Request<any, any, OrderRequest>, res: Response): void {
    const beer = beersRepo.get(req.body.beerId)
    if (beer) {
        if (beer.pintsRemaining > 0) {
            beer.pintsRemaining -= 1;
            beersRepo.update(beer);
            ordersRepo.addOrder(req.body.table, req.body);
            res.sendStatus(200);
        }
        else {
            res.status(400).send("SOLD_OUT");
        }
    }
    else {
        res.sendStatus(404);
    }
}

function completeOrder(req: Request, res: Response): void {
    ordersRepo.deleteOrder(req.params.table);
    res.sendStatus(200);
}