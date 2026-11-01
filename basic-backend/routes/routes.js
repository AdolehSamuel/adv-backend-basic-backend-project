const homeController = require('../controllers/homeController');
const aboutController = require('../controllers/aboutController');
const dataController = require('../controllers/dataController');
const notFoundController = require('../controllers/notFoundController');

const routes = (req, res) => {
  const path = req.url;

  if (path === '/') {
    homeController(req, res);
  } else if (path === '/about') {
    aboutController(req, res);
  } else if (path === '/data') {
    dataController(req, res);
  } else {
    notFoundController(req, res);
  }
};

module.exports = routes;
