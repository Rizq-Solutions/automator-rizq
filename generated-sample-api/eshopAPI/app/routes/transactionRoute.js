'use strict';
module.exports = function(app) {
  var transactionInstance = require('../controllers/transactionController');

  app.route('/transaction')
    .get(transactionInstance.listAll)
    .post(transactionInstance.createNew);
   
   app.route('/transaction/:transaction_id')
    .get(transactionInstance.readById)
    .put(transactionInstance.updateById)
    .delete(transactionInstance.deleteById);

	app.route('/transaction/search/:searchKey')
    .get(transactionInstance.search);
    };
