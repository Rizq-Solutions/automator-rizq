'use strict';
module.exports = function(app) {
  var priceInstance = require('../controllers/priceController');

  app.route('/price')
    .get(priceInstance.listAll)
    .post(priceInstance.createNew);
   
   app.route('/price/:price_id')
    .get(priceInstance.readById)
    .put(priceInstance.updateById)
    .delete(priceInstance.deleteById);

	app.route('/price/search/:searchKey')
    .get(priceInstance.search);
    };
