'use strict';
module.exports = function(app) {
  var telephoneInstance = require('../controllers/telephoneController');

  app.route('/telephone')
    .get(telephoneInstance.listAll)
    .post(telephoneInstance.createNew);
   
   app.route('/telephone/:telephone_id')
    .get(telephoneInstance.readById)
    .put(telephoneInstance.updateById)
    .delete(telephoneInstance.deleteById);

	app.route('/telephone/search/:searchKey')
    .get(telephoneInstance.search);
    };
