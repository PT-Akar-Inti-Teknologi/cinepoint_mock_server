const jsonServer = require('json-server');
const server = jsonServer.create();
const router = jsonServer.router('db.json');
const middlewares = jsonServer.defaults();
const port = process.env.PORT || 3200;

server.use(middlewares);
server.use(router);

const rewriteRoutes = require('./routes.json');
server.use(jsonServer.rewriter(rewriteRoutes));

server.listen(port);
