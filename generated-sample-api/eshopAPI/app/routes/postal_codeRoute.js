'use strict';
module.exports = function(app) {
  var postal_codeInstance = require('../controllers/postal_codeController');

  app.route('/postal_code')
    .get(postal_codeInstance.listAll)
    .post(postal_codeInstance.createNew);
   
   app.route('/postal_code/:postal_code_id')
    .get(postal_codeInstance.readById)
    .put(postal_codeInstance.updateById)
    .delete(postal_codeInstance.deleteById);

	app.route('/postal_code/search/:searchKey')
    .get(postal_codeInstance.search);
    };
