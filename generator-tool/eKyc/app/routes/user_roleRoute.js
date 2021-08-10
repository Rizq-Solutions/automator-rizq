'use strict';
module.exports = function(app) {
  var user_roleInstance = require('../controllers/user_roleController');

  app.route('/user_role')
    .get(user_roleInstance.listAll)
    .post(user_roleInstance.createNew);
   
   app.route('/user_role/:id')
    .get(user_roleInstance.readById)
    .put(user_roleInstance.updateById)
    .delete(user_roleInstance.deleteById);

	app.route('/user_role/search/:searchKey')
    .get(user_roleInstance.search);
    };
