const notFoundController = (req, res) => {
  res.writeHead(404, { 'Content-Type': 'text/plain' });
  res.end('Page not found');
};

module.exports = notFoundController;
