'use strict';

/**
 * @ngdoc function
 * @name systemsHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the systemsHubApp
 */
app.controller('bannerCtrl', ['$scope', function(scope) {
  scope.images = [{
    'header': '',
    'description': 'Systems Hub is a provider of high-level Security System for Homes, apartments, gated communities, Educational institutions & Commercial enterprises, ICT & Telecommunications Systems for commercial, government and industrial sectors throughout the East Africa. ',
    'src': 'public/images/camera-medium.jpg'
  }];
}]);
