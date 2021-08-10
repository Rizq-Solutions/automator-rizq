'use strict';
module.exports = function(app) {
  var accountInstance = require('../controllers/accountController');

  app.route('/account')
    .get(accountInstance.listAll)
    .post(accountInstance.createNew);
   
   app.route('/account/:account_id')
    .get(accountInstance.readById)
    .put(accountInstance.updateById)
    .delete(accountInstance.deleteById);

	app.route('/account/search/:searchKey')
    .get(accountInstance.search);
    };
