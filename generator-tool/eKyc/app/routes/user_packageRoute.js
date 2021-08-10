'use strict';
module.exports = function(app) {
  var user_packageInstance = require('../controllers/user_packageController');

  app.route('/user_package')
    .get(user_packageInstance.listAll)
    .post(user_packageInstance.createNew);
   
   app.route('/user_package/:id')
    .get(user_packageInstance.readById)
    .put(user_packageInstance.updateById)
    .delete(user_packageInstance.deleteById);

	app.route('/user_package/search/:searchKey')
    .get(user_packageInstance.search);
    };
