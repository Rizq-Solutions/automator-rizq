'use strict';
module.exports = function(app) {
  var price_typeInstance = require('../controllers/price_typeController');

  app.route('/price_type')
    .get(price_typeInstance.listAll)
    .post(price_typeInstance.createNew);
   
   app.route('/price_type/:price_type_id')
    .get(price_typeInstance.readById)
    .put(price_typeInstance.updateById)
    .delete(price_typeInstance.deleteById);

	app.route('/price_type/search/:searchKey')
    .get(price_typeInstance.search);
    };
