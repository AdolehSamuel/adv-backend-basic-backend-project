const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const dataController = require('../controllers/dataController');
const greetController = require('../controllers/greetController');
const notFoundController = require('../controllers/notFoundController');

const routes = (req, res) => {
  const fullUrl = new URL(req.url, 'http://localhost');
  const path = fullUrl.pathname;

  if (path === '/') {
    homeController(req, res);
  } else if (path === '/about') {
    aboutController(req, res);
  } else if (path === '/data') {
    dataController(req, res);
  } else if (path === '/greet') {
    greetController(req, res);
  } else {
    notFoundController(req, res);
  }
};

module.exports = routes;
