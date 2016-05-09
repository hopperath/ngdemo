'use strict';

var EditEventController = require('./controllers/EditEventController');
var EventController = require('./controllers/EventController');
var EventData = require('./services/EventData');
var CacheSampleController = require('./services/CacheSampleController');

var angular = require('angular');
angular
  .module('eventsApp', [require('angular-resource')])
  .factory('eventData',EventData)
  .controller('EditEventController',EditEventController)
  .controller('CacheSampleController',CacheSampleController)
  .controller('EventController',EventController);



//require('./services/EventData');
//require('./controllers/EventController');
