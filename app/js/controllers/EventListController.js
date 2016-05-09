'use strict';

module.exports = function EventListController($scope, $location, eventData)
{
  $scope.events=eventData.getAllEvents();
};
