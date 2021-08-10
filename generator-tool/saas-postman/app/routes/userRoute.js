'use strict';
module.exports = function(app) {
  var userInstance = require('../controllers/userController');

  app.route('/user')
    .get(userInstance.listAll)
    .post(userInstance.createNew);
   
   app.route('/user/:id')
    .get(userInstance.readById)
    .put(userInstance.updateById)
    .delete(userInstance.deleteById);

	app.route('/user/search/:searchKey')
    .get(userInstance.search);
    };
