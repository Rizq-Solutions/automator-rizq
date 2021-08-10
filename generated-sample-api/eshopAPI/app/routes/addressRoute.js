'use strict';
module.exports = function(app) {
  var addressInstance = require('../controllers/addressController');

  app.route('/address')
    .get(addressInstance.listAll)
    .post(addressInstance.createNew);
   
   app.route('/address/:address_id')
    .get(addressInstance.readById)
    .put(addressInstance.updateById)
    .delete(addressInstance.deleteById);

	app.route('/address/search/:searchKey')
    .get(addressInstance.search);
    };
