const jsonServer = require("json-server");
const server = jsonServer.create();
const path = require("path");
const router = jsonServer.router(path.join(__dirname, "db.json"));

// Can pass a limited number of options to this to override (some) defaults. See https://github.com/typicode/json-server#api
const middlewares = jsonServer.defaults();

// Set default middlewares (logger, static, cors and no-cache)
server.use(middlewares);

// To handle POST, PUT and PATCH you need to use a body-parser. Using JSON Server's bodyParser
server.use(jsonServer.bodyParser);

// Simulate delay on all requests
server.use(function(req, res, next) {
  setTimeout(next, 0);
});

// Declaring custom routes below. Add custom routes before JSON Server router

server.use(router);

const port = 3001;
server.listen(port, () => {
  console.log(`JSON Server is running on port ${port}`);
});

// Centralized logic
// Could implement a method to create a URL friendly slug however I think most pages wont be directly accessible.
// If I choose to add an api to create new questions I would put validation here.
