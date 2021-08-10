'use strict';
module.exports = function(app) {
  var balanceInstance = require('../controllers/balanceController');

  app.route('/balance')
    .get(balanceInstance.listAll)
    .post(balanceInstance.createNew);
   
   app.route('/balance/:id')
    .get(balanceInstance.readById)
    .put(balanceInstance.updateById)
    .delete(balanceInstance.deleteById);

	app.route('/balance/search/:searchKey')
    .get(balanceInstance.search);
    };
