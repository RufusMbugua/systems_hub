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
    'slick'
  ]);
;'use strict';

/**
 * @ngdoc function
 * @name systemsHubApp.controller:AboutCtrl
 * @description
 * # AboutCtrl
 * Controller of the systemsHubApp
 */
app.controller('AboutCtrl', function() {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
;'use strict';

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
;'use strict';

/**
 * @ngdoc function
 * @name systemsHubApp.controller:MainCtrl
 * @description
 * # MainCtrl
 * Controller of the systemsHubApp
 */
app.controller('MainCtrl', function() {
  this.awesomeThings = [
    'HTML5 Boilerplate',
    'AngularJS',
    'Karma'
  ];
});
;app.config(function($stateProvider, $urlRouterProvider) {
  // For any unmatched url, redirect to /state1
  /**
   * Default Route
   * @param  {[type]} "/account/expenditure" [description]
   * @return {[type]}                        [description]
   */
  $urlRouterProvider.otherwise("/home");

  // Now set up the states
  /**
   * Public State  :: Currently Depricated
   * @param  {[type]} 'public'     [description]
   * @param  {[type]} {                                                             url: '/' [description]
   * @param  {[type]} views:       {                                                                       '': {                       controller: 'aboutCtrl' [description]
   * @param  {[type]} templateUrl: 'app/partials/public/home.html' [description]
   * @param  {[type]} }                                                             }                          } [description]
   * @return {[type]}              [description]
   */
  $stateProvider.state('home', {
    url: '/home',
    template: 'You',
    views: {
      '': {
        templateUrl: 'app/scripts/partials/home.html',
      },
      'header@home': {
        templateUrl: 'app/scripts/partials/header.html',
      },
      'image-banner@home': {
        templateUrl: 'app/scripts/partials/image-banner.html',
        controller: 'bannerCtrl'
      },
      'services@home': {
        templateUrl: 'app/scripts/partials/services.html',
      },
      'contact-us@home': {
        templateUrl: 'app/scripts/partials/contact-us.html',
      },
    }
  });
});
;angular.module('templates-dist', ['../app/scripts/partials/contact-us.html', '../app/scripts/partials/header.html', '../app/scripts/partials/home.html', '../app/scripts/partials/image-banner.html', '../app/scripts/partials/services.html']);

angular.module("../app/scripts/partials/contact-us.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/scripts/partials/contact-us.html",
    "<div class=\"container\">\n" +
    "  <div class=\"row\">\n" +
    "    <h4>Contact Us</h4>\n" +
    "    <div class=\"col-md-12 flushed\">\n" +
    "      <h4>Map will be Attached Here</h4>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-12 flushed\">\n" +
    "      <p class=\"centered\" >P.O Box 100018 – 00101 Nairobi.</p>\n" +
    "      <p class=\"centered\" >Tel: 0721351898 / 0732942181</p>\n" +
    "      <p class=\"centered\" >Email: info@systemshub.co.ke</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6 flushed\">\n" +
    "      <p class=\"centered\">Steve M. Mwenda</p>\n" +
    "      <p class=\"centered\">Tel: 0721351898</p>\n" +
    "      <p class=\"centered\">Email: smwenda@systemshub.co.ke</p>\n" +
    "    </div>\n" +
    "    <div class=\"col-md-6 flushed\">\n" +
    "      <p class=\"centered\">George K. Muiruri</p>\n" +
    "      <p class=\"centered\">Tel: 0732942181</p>\n" +
    "      <p class=\"centered\">Email: gkahinga@systemshub.co.ke</p>\n" +
    "    </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/scripts/partials/header.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/scripts/partials/header.html",
    "<div class=\"header\">\n" +
    "  <div class=\"navbar navbar-default\" role=\"navigation\">\n" +
    "      <div class=\"navbar-header\">\n" +
    "\n" +
    "        <button type=\"button\" class=\"navbar-toggle collapsed\" data-toggle=\"collapse\" data-target=\"#js-navbar-collapse\">\n" +
    "          <span class=\"sr-only\">Toggle navigation</span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "          <span class=\"icon-bar\"></span>\n" +
    "        </button>\n" +
    "\n" +
    "        <a class=\"navbar-brand\" href=\"#/\">systemsHub</a>\n" +
    "      </div>\n" +
    "\n" +
    "      <div class=\"collapse navbar-collapse\" id=\"js-navbar-collapse\">\n" +
    "\n" +
    "        <ul class=\"nav navbar-nav navbar-right\">\n" +
    "          <li class=\"active\"><a href=\"#/\">ABOUT</a></li>\n" +
    "          <li><a ng-href=\"#/about\">SERVICES</a></li>\n" +
    "          <li><a ng-href=\"#/\">CONTACT</a></li>\n" +
    "        </ul>\n" +
    "      </div>\n" +
    "  </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/scripts/partials/home.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/scripts/partials/home.html",
    "<div ui-view=\"header\"></div>\n" +
    "<div ui-view=\"image-banner\"></div>\n" +
    "<div ui-view=\"services\"></div>\n" +
    "<div ui-view=\"contact-us\"></div>\n" +
    "<div ui-view=\"\"></div>\n" +
    "");
}]);

angular.module("../app/scripts/partials/image-banner.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/scripts/partials/image-banner.html",
    "<div slick dots=true infinite=true speed=300 slides-to-show=1 touch-move=true slides-to-scroll=1>\n" +
    "    <div ng-repeat=\"image in images\">\n" +
    "      <div class=\"layer\">\n" +
    "        <div class=\"green mask\">  </div>\n" +
    "        <img ng-src=\"{{image.src}}\" class=\"img-responsive\" alt=\"\">\n" +
    "        <h4 ng-bind=\"image.header\"></h4>\n" +
    "        <p ng-bind=\"image.description\"></p>\n" +
    "      </div>\n" +
    "    </div>\n" +
    "</div>\n" +
    "");
}]);

angular.module("../app/scripts/partials/services.html", []).run(["$templateCache", function($templateCache) {
  $templateCache.put("../app/scripts/partials/services.html",
    "<div class=\"container\">\n" +
    "<div class=\"row\">\n" +
    "  <h3>Our Services</h3>\n" +
    "  <div class=\"col-md-6 flushed\">\n" +
    "    <h5 class=\"white\">Surveillance Systems</h5>\n" +
    "    <div class=\"layer\">\n" +
    "      <div class=\"mask red\"></div>\n" +
    "      <img class=\"img-responsive\" src=\"\" alt=\"\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6 flushed\">\n" +
    "    <h5 class=\"white\">ICT Hardware and Software solutions</h5>\n" +
    "    <div class=\"layer\">\n" +
    "      <div class=\"mask blue\"></div>\n" +
    "      <img class=\"img-responsive\" src=\"\" alt=\"\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6 flushed\">\n" +
    "    <h5 class=\"white\">Structured cabling & Office networks</h5>\n" +
    "    <div class=\"layer\">\n" +
    "      <div class=\"mask red\"></div>\n" +
    "      <img class=\"img-responsive\" src=\"\" alt=\"\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-6 flushed\">\n" +
    "    <h5 class=\"white\">ICT systems support & management</h5>\n" +
    "    <div class=\"layer\">\n" +
    "      <div class=\"mask blue\"></div>\n" +
    "      <img class=\"img-responsive\" src=\"\" alt=\"\">\n" +
    "    </div>\n" +
    "  </div>\n" +
    "  <div class=\"col-md-12 flushed\">\n" +
    "    <h5 class=\"white\">Internet Services (Fiber and WIFI)</h5>\n" +
    "    <div class=\"layer\">\n" +
    "      <div class=\"mask red\"></div>\n" +
    "      <img class=\"img-responsive\" src=\"\" alt=\"\">\n" +
    "    </div>\n" +
    "    <div style=\"width:30%;margin:auto\">\n" +
    "      <button class=\"btn btn-large btn-default centered\">Get Our Brochure</button>\n" +
    "    </div>\n" +
    "\n" +
    "  </div>\n" +
    "</div>\n" +
    "</div>\n" +
    "");
}]);
