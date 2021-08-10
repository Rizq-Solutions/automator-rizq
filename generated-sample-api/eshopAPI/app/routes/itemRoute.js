'use strict';
module.exports = function(app) {
  var itemInstance = require('../controllers/itemController');

  app.route('/item')
    .get(itemInstance.listAll)
    .post(itemInstance.createNew);
   
   app.route('/item/:item_id')
    .get(itemInstance.readById)
    .put(itemInstance.updateById)
    .delete(itemInstance.deleteById);

	app.route('/item/search/:searchKey')
    .get(itemInstance.search);
    };
