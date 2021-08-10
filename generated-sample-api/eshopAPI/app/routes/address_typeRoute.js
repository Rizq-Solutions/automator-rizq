'use strict';
module.exports = function(app) {
  var address_typeInstance = require('../controllers/address_typeController');

  app.route('/address_type')
    .get(address_typeInstance.listAll)
    .post(address_typeInstance.createNew);
   
   app.route('/address_type/:address_type_id')
    .get(address_typeInstance.readById)
    .put(address_typeInstance.updateById)
    .delete(address_typeInstance.deleteById);

	app.route('/address_type/search/:searchKey')
    .get(address_typeInstance.search);
    };
