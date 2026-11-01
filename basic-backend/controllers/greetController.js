const greetController = (req, res) => {
  const fullUrl = new URL(req.url, 'http://localhost');
  const nameFromUrl = fullUrl.searchParams.get('name');
  const name = nameFromUrl || 'Guest';
  const greeting = `Hello, ${name}!`;

  res.writeHead(200, { 'Content-Type': 'text/plain' });
  res.end(greeting);
};

module.exports = greetController;
