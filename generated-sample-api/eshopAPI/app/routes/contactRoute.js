'use strict';
module.exports = function(app) {
  var contactInstance = require('../controllers/contactController');

  app.route('/contact')
    .get(contactInstance.listAll)
    .post(contactInstance.createNew);
   
   app.route('/contact/:contact_id')
    .get(contactInstance.readById)
    .put(contactInstance.updateById)
    .delete(contactInstance.deleteById);

	app.route('/contact/search/:searchKey')
    .get(contactInstance.search);
    };
