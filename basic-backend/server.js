const http = require('http');

const PORT = 3000;

const server = http.createServer((req, res) => {
  const path = req.url;

  if (path === '/') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Hello, World!');
  } else if (path === '/about') {
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('This is the about page.');
  } else if (path === '/data') {
    const user = { name: 'Alice', age: 21 };
    const userAsJson = JSON.stringify(user);

    res.writeHead(200, { 'Content-Type': 'application/json' });
    res.end(userAsJson);
  } else {
    res.writeHead(404, { 'Content-Type': 'text/plain' });
    res.end('Page not found');
  }
});

server.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});
