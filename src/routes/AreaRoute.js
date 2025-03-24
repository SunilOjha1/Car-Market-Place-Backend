const routes = require('express').Router();
const areaController = require('../controllers/AreaController');

routes.post('/add', areaController.addArea);
routes.get('/getarea', areaController.getAreas);
module.exports = routes;