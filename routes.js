'use strict';

var controller = require('./controller/controller');

module.exports = function(app) {

   app.route('/about').get(controller.about);

   app.route('/test').get(controller.test);

};