const user = require('../data/user.json');

const dataController = (req, res) => {
  const userAsJson = JSON.stringify(user);

  res.writeHead(200, { 'Content-Type': 'application/json' });
  res.end(userAsJson);
};

module.exports = dataController;
