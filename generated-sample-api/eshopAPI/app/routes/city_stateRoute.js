'use strict';
module.exports = function(app) {
  var city_stateInstance = require('../controllers/city_stateController');

  app.route('/city_state')
    .get(city_stateInstance.listAll)
    .post(city_stateInstance.createNew);
   
   app.route('/city_state/:city_state_id')
    .get(city_stateInstance.readById)
    .put(city_stateInstance.updateById)
    .delete(city_stateInstance.deleteById);

	app.route('/city_state/search/:searchKey')
    .get(city_stateInstance.search);
    };
