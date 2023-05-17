import { Request, Response, Express } from 'express';
import { BeerRepository, MockBeerRepository } from './beers-repo';
import { OrderId, OrderItem, OrderRequest } from './types';
import { MockOrdersRepository, OrdersRepository } from './orders-repo';

const ordersRepo: OrdersRepository = new MockOrdersRepository();
const beersRepo: BeerRepository = new MockBeerRepository();

// curl -d "beerId=2&table=1&name=jay" http://localhost:2001/orders

export function initPaths(app: Express): void {
    app.get('/orders/:table/:name', get);
    app.post('/orders/:table/:name', order);
    app.delete('/orders/:table/:name', completeOrder)
}

function get(req: Request<OrderId>, res: Response): void {
    const orders = ordersRepo.get(req.params) ?? [];

    const items: OrderItem[] = [];
    orders.forEach(o => {
        const item = items.find(i => i.itemId === o.beerId);
        if (!item) {
            const beer = beersRepo.get(o.beerId);
            items.push({
                itemId: beer.id,
                itemName: beer.name,
                costPerUnit: beer.price,
                count: 1
            });
        }
        else {
            item.count += 1;
        }
    });

    res.send(items);
}

function order(req: Request<OrderId, any, OrderRequest>, res: Response): void {
    const beer = beersRepo.get(req.body.beerId)
    if (beer) {
        if (beer.pintsRemaining > 0) {
            beer.pintsRemaining -= 1;
            beersRepo.update(beer);
            ordersRepo.addOrder(req.params, req.body);
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

function completeOrder(req: Request<OrderId>, res: Response): void {
    ordersRepo.deleteOrder(req.params);
    res.sendStatus(200);
}