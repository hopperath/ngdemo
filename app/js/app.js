'use strict';

var EditEventController = require('./controllers/EditEventController');
var EventController = require('./controllers/EventController');
var EventData = require('./services/EventData');

var angular = require('angular');
angular
  .module('eventsApp', [require('angular-resource'), require('angular-route')])
  .config(function($routeProvider)
  {
    $routeProvider.when('/newEvent',
    {
      templateUrl: 'templates/NewEvent.html',
      controller: 'EditEventController'
    });
  })
  .factory('eventData', EventData)
  .controller('EditEventController', EditEventController)
  .controller('EventController', EventController);



//require('./services/EventData');
//require('./controllers/EventController');
