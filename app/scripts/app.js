/**
 * @ngdoc overview
 * @name systemsHubApp
 * @description
 * # systemsHubApp
 *
 * Main module of the application.
 */
var app = angular
  .module('systemsHubApp', [
    'ui.router',
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngSanitize',
    'ngTouch',
    'slick',
    'duScroll',
    'sn.skrollr'
  ]);

app.config(["snSkrollrProvider", function(snSkrollrProvider) {
  snSkrollrProvider.config = {
    smoothScrolling: true
  };
}]);

// 2. initialise skrollr at runtime
app.run(["snSkrollr", function(snSkrollr) {
  snSkrollr.init();
}])
