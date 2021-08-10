'use strict';
module.exports = function(app) {
  var item_subcategoryInstance = require('../controllers/item_subcategoryController');

  app.route('/item_subcategory')
    .get(item_subcategoryInstance.listAll)
    .post(item_subcategoryInstance.createNew);
   
   app.route('/item_subcategory/:item_subcategory_id')
    .get(item_subcategoryInstance.readById)
    .put(item_subcategoryInstance.updateById)
    .delete(item_subcategoryInstance.deleteById);

	app.route('/item_subcategory/search/:searchKey')
    .get(item_subcategoryInstance.search);
    };
