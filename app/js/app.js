'use strict';

var EditEventController = require('./controllers/EditEventController');
var EditProfileController = require('./controllers/EditProfileController');
var EventDetailsController = require('./controllers/EventDetailsController');
var EventListController = require('./controllers/EventListController');
var EventData = require('./services/EventData');
var ProfileData = require('./services/ProfileData');
var SampleDirectiveController = require('./controllers/SampleDirectiveController');
var SampleDirective = require('./directives.js');

var angular = require('angular');




angular
  .module('eventsApp', [require('angular-resource'), require('angular-route') ])
  .config(function($routeProvider)
  {
    $routeProvider.when('/newEvent',
    {
      templateUrl: 'templates/NewEvent.html',
      controller: 'EditEventController'
    });

    $routeProvider.when('/editProfile',
    {
      templateUrl: 'templates/EditProfile.html',
      controller: 'EditProfileController'
    });

    $routeProvider.when('/events',
    {
      templateUrl: 'templates/EventList.html',
      controller: 'EventListController'
    });

    $routeProvider.when('/sampleDirective',
    {
      templateUrl: 'templates/SampleDirective.html',
      controller: 'SampleDirectiveController'
    });

    $routeProvider.when('/event/:eventId',
    {
      templateUrl: 'templates/EventDetails.html',
      controller: 'EventDetailsController',
      resolve:
      {
          response: function($route, eventData) {
              return eventData.getEvent($route.current.pathParams.eventId);
          }
      }
    });

    $routeProvider.otherwise({redirectTo: 'events'});
  })
  .factory('eventData', EventData)
  .factory('profileData', ProfileData)
  .directive('mySample',SampleDirective)
  .controller('SampleDirectiveController', SampleDirectiveController)
  .controller('EditEventController', EditEventController)
  .controller('EventListController', EventListController)
  .controller('EditProfileController', EditProfileController)
  .controller('EventDetailsController', EventDetailsController);
