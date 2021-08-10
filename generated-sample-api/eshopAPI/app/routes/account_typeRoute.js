'use strict';
module.exports = function(app) {
  var account_typeInstance = require('../controllers/account_typeController');

  app.route('/account_type')
    .get(account_typeInstance.listAll)
    .post(account_typeInstance.createNew);
   
   app.route('/account_type/:account_type_id')
    .get(account_typeInstance.readById)
    .put(account_typeInstance.updateById)
    .delete(account_typeInstance.deleteById);

	app.route('/account_type/search/:searchKey')
    .get(account_typeInstance.search);
    };
