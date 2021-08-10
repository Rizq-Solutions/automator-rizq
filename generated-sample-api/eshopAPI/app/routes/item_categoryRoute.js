'use strict';
module.exports = function(app) {
  var item_categoryInstance = require('../controllers/item_categoryController');

  app.route('/item_category')
    .get(item_categoryInstance.listAll)
    .post(item_categoryInstance.createNew);
   
   app.route('/item_category/:item_category_id')
    .get(item_categoryInstance.readById)
    .put(item_categoryInstance.updateById)
    .delete(item_categoryInstance.deleteById);

	app.route('/item_category/search/:searchKey')
    .get(item_categoryInstance.search);
    };
