'use strict';
module.exports = function(app) {
  var package_servicesInstance = require('../controllers/package_servicesController');

  app.route('/package_services')
    .get(package_servicesInstance.listAll)
    .post(package_servicesInstance.createNew);
   
   app.route('/package_services/:id')
    .get(package_servicesInstance.readById)
    .put(package_servicesInstance.updateById)
    .delete(package_servicesInstance.deleteById);

	app.route('/package_services/search/:searchKey')
    .get(package_servicesInstance.search);
    };
