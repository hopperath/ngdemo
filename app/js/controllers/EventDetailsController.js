'use strict';
module.exports = function EventDetailsController ($scope ,$log, $route)
{

  $scope.sortorder = 'name';
  $log.info($route.current.locals.response.data);
  $scope.event = $route.current.locals.response.data;
  /*
  eventData.getEvent($routeParams.eventId)
      .then( function(response)
      {
          $scope.event = response.data;
          $log.info("then callback");
          $log.info(response);
      });
      */

  $scope.upVoteSession = function(session)
  {
    session.upVoteCount++;
  };

  $scope.downVoteSession = function(session)
  {
    session.upVoteCount--;
  };

};
