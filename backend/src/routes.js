const {Router} = require('express');
const DevConstroller = require('./controllers/DevController');
const SearchConstroller = require('./controllers/SearchController');


const routes = Router();

routes.get('/devs', DevConstroller.index);
routes.post('/devs', DevConstroller.store);

routes.get('/search', SearchConstroller.index);

module.exports = routes;