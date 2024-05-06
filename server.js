// server.js
const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") res.end("<h1>Hello Node!!!!</h1>\n");
});

server.listen(3000, (err) => {
  if (err) throw err;
  console.log("Server running at http://localhost:3000/");
});
