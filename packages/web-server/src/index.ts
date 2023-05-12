import express from 'express';
import * as beers from './beers';

const PORT = 2001;

const app = express();

app.get('/', (req, res) => {
  res.send('Code City Beer Server!');
});

app.get('/beers', beers.list);
app.get('/beers/:id', beers.get);
  
app.listen(PORT, () => {
  console.log(`Code City Beer Server listening on http://localhost:${PORT}`)
});