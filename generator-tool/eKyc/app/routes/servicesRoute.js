'use strict';
module.exports = function(app) {
  var servicesInstance = require('../controllers/servicesController');

  app.route('/services')
    .get(servicesInstance.listAll)
    .post(servicesInstance.createNew);
   
   app.route('/services/:id')
    .get(servicesInstance.readById)
    .put(servicesInstance.updateById)
    .delete(servicesInstance.deleteById);

	app.route('/services/search/:searchKey')
    .get(servicesInstance.search);
    };
