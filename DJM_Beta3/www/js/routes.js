angular.module('app.routes', [])

.config(function($stateProvider, $urlRouterProvider) {

  // Ionic uses AngularUI Router which uses the concept of states
  // Learn more here: https://github.com/angular-ui/ui-router
  // Set up the various states which the app can be in.
  // Each state's controller can be found in controllers.js
  $stateProvider
    
  

      .state('tabsController.dJMJewels', {
    url: '/home',
    views: {
      'tab1': {
        templateUrl: 'templates/dJMJewels.html',
        controller: 'dJMJewelsCtrl'
      }
    }
  })

  .state('tabsController.contactUs', {
    url: '/contactus',
    views: {
      'tab2': {
        templateUrl: 'templates/contactUs.html',
        controller: 'contactUsCtrl'
      }
    }
  })

  .state('tabsController.profile', {
    url: '/profile',
    views: {
      'tab3': {
        templateUrl: 'templates/profile.html',
        controller: 'profileCtrl'
      }
    }
  })

  .state('tabsController', {
    url: '/page1',
    templateUrl: 'templates/tabsController.html',
    abstract:true
  })

  .state('login', {
    url: '/login',
    templateUrl: 'templates/login.html',
    controller: 'loginCtrl'
  })

  .state('welcome', {
    url: '/welcome',
    templateUrl: 'templates/welcome.html',
    controller: 'welcomeCtrl'
  })

  .state('tabsController.baleBangaara', {
    url: '/balebangaara',
    views: {
      'tab1': {
        templateUrl: 'templates/baleBangaara.html',
        controller: 'baleBangaaraCtrl'
      }
    }
  })

  .state('tabsController.luckyLakshmi', {
    url: '/luckylakshmi',
    views: {
      'tab1': {
        templateUrl: 'templates/luckyLakshmi.html',
        controller: 'luckyLakshmiCtrl'
      }
    }
  })

  .state('tabsController.khanakaDhara', {
    url: '/khanakadhara',
    views: {
      'tab1': {
        templateUrl: 'templates/khanakaDhara.html',
        controller: 'khanakaDharaCtrl'
      }
    }
  })

  .state('tabsController.goldPiggyBank', {
    url: '/goldpiggybank',
    views: {
      'tab1': {
        templateUrl: 'templates/goldPiggyBank.html',
        controller: 'goldPiggyBankCtrl'
      }
    }
  })

  .state('fAQ', {
    url: '/faq',
    templateUrl: 'templates/fAQ.html',
    controller: 'fAQCtrl'
  })

  .state('tabsController.notifications', {
    url: '/notifications',
    views: {
      'tab5': {
        templateUrl: 'templates/notifications.html',
        controller: 'notificationsCtrl'
      }
    }
  })

$urlRouterProvider.otherwise('/welcome')

  

});