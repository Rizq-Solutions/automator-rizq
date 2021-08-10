'use strict';
module.exports = function(app) {
  var contact_typeInstance = require('../controllers/contact_typeController');

  app.route('/contact_type')
    .get(contact_typeInstance.listAll)
    .post(contact_typeInstance.createNew);
   
   app.route('/contact_type/:contact_type_id')
    .get(contact_typeInstance.readById)
    .put(contact_typeInstance.updateById)
    .delete(contact_typeInstance.deleteById);

	app.route('/contact_type/search/:searchKey')
    .get(contact_typeInstance.search);
    };
