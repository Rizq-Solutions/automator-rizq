'use strict';
module.exports = function(app) {
  var usage_logInstance = require('../controllers/usage_logController');

  app.route('/usage_log')
    .get(usage_logInstance.listAll)
    .post(usage_logInstance.createNew);
   
   app.route('/usage_log/:id')
    .get(usage_logInstance.readById)
    .put(usage_logInstance.updateById)
    .delete(usage_logInstance.deleteById);

	app.route('/usage_log/search/:searchKey')
    .get(usage_logInstance.search);
    };
