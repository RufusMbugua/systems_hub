app.config(function($stateProvider, $urlRouterProvider) {
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
