'use strict';
module.exports = function(app) {
  var topup_recordInstance = require('../controllers/topup_recordController');

  app.route('/topup_record')
    .get(topup_recordInstance.listAll)
    .post(topup_recordInstance.createNew);
   
   app.route('/topup_record/:id')
    .get(topup_recordInstance.readById)
    .put(topup_recordInstance.updateById)
    .delete(topup_recordInstance.deleteById);

	app.route('/topup_record/search/:searchKey')
    .get(topup_recordInstance.search);
    };
