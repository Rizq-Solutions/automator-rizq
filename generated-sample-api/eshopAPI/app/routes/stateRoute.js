'use strict';
module.exports = function(app) {
  var stateInstance = require('../controllers/stateController');

  app.route('/state')
    .get(stateInstance.listAll)
    .post(stateInstance.createNew);
   
   app.route('/state/:state_id')
    .get(stateInstance.readById)
    .put(stateInstance.updateById)
    .delete(stateInstance.deleteById);

	app.route('/state/search/:searchKey')
    .get(stateInstance.search);
    };
