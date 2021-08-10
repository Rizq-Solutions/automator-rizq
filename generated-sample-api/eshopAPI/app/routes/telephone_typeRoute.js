'use strict';
module.exports = function(app) {
  var telephone_typeInstance = require('../controllers/telephone_typeController');

  app.route('/telephone_type')
    .get(telephone_typeInstance.listAll)
    .post(telephone_typeInstance.createNew);
   
   app.route('/telephone_type/:telephone_type_id')
    .get(telephone_typeInstance.readById)
    .put(telephone_typeInstance.updateById)
    .delete(telephone_typeInstance.deleteById);

	app.route('/telephone_type/search/:searchKey')
    .get(telephone_typeInstance.search);
    };
