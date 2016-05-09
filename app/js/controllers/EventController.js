'use strict';
module.exports = function EventController ($scope ,$log, $anchorScroll, eventData)
{

  $scope.sortorder = 'name';
  eventData.getEvent()
      //.success( function(event) { $scope.event = event; })
      //.error ( function(data,status,headers,config) {$log.warn(data,status,headers,config); });
      .then( function(response)
      {
          $scope.event = response.data;
          $log.info("then callback");
          $log.info(response);
      });
      /*
      .success( function(myevent)
      {
          $scope.event = myevent;
          $log.info("success callback");
          $log.info(myevent);
      });
      */
//      .catch ( function(data,status,headers,config) {$log.warn(data,status,headers,config); });


  $scope.upVoteSession = function(session)
  {
    session.upVoteCount++;
  };

  $scope.downVoteSession = function(session)
  {
    session.upVoteCount--;
  };

  $scope.scrollToSession = function()
  {
      $anchorScroll();
  };
};
