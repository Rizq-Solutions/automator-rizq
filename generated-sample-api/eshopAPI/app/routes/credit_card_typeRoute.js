'use strict';
module.exports = function(app) {
  var credit_card_typeInstance = require('../controllers/credit_card_typeController');

  app.route('/credit_card_type')
    .get(credit_card_typeInstance.listAll)
    .post(credit_card_typeInstance.createNew);
   
   app.route('/credit_card_type/:credit_card_type_id')
    .get(credit_card_typeInstance.readById)
    .put(credit_card_typeInstance.updateById)
    .delete(credit_card_typeInstance.deleteById);

	app.route('/credit_card_type/search/:searchKey')
    .get(credit_card_typeInstance.search);
    };
