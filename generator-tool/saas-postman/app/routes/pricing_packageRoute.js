'use strict';
module.exports = function(app) {
  var pricing_packageInstance = require('../controllers/pricing_packageController');

  app.route('/pricing_package')
    .get(pricing_packageInstance.listAll)
    .post(pricing_packageInstance.createNew);
   
   app.route('/pricing_package/:id')
    .get(pricing_packageInstance.readById)
    .put(pricing_packageInstance.updateById)
    .delete(pricing_packageInstance.deleteById);

	app.route('/pricing_package/search/:searchKey')
    .get(pricing_packageInstance.search);
    };
