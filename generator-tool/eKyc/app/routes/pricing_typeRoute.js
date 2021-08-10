'use strict';
module.exports = function(app) {
  var pricing_typeInstance = require('../controllers/pricing_typeController');

  app.route('/pricing_type')
    .get(pricing_typeInstance.listAll)
    .post(pricing_typeInstance.createNew);
   
   app.route('/pricing_type/:id')
    .get(pricing_typeInstance.readById)
    .put(pricing_typeInstance.updateById)
    .delete(pricing_typeInstance.deleteById);

	app.route('/pricing_type/search/:searchKey')
    .get(pricing_typeInstance.search);
    };
