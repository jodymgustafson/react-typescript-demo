import express from 'express';
import * as beersHandler from './beers-handler';
import * as ordersHandler from './orders-handler';

const PORT = 2001;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use((req, res, next) => {
    console.log(req.method, req.url);
    next();
});

app.get('/', (req, res) => {
  res.send('Code City Beer Server!');
});

beersHandler.initPaths(app);
ordersHandler.initPaths(app);

app.listen(PORT, () => {
  console.log(`Code City Beer Server listening on http://localhost:${PORT}`)
});