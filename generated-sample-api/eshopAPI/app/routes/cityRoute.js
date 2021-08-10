'use strict';
module.exports = function(app) {
  var cityInstance = require('../controllers/cityController');

  app.route('/city')
    .get(cityInstance.listAll)
    .post(cityInstance.createNew);
   
   app.route('/city/:city_id')
    .get(cityInstance.readById)
    .put(cityInstance.updateById)
    .delete(cityInstance.deleteById);

	app.route('/city/search/:searchKey')
    .get(cityInstance.search);
    };
