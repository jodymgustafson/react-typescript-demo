## Web Server

Web server for Code City Beer App

Contains a REST service with the following resources
- beers: Gets info about beer available
- orders: Managers beer orders

## Beers
curl http://localhost:2001/beers
curl http://localhost:2001/beers/1

## Orders
curl -d "beerId=2&table=1&name=jay" http://localhost:2001/orders