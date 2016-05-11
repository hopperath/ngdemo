'use strict';

module.exports = function EventListController($scope, $log, eventData)
{

    //$scope.events = [ {name:"one", time:"01JAN89"}, {name:"two", time:"31DEC99"}];
    //$log.info($scope.events);
    eventData.getAllEvents()
             .then(function(response)
              {
                  //console.log('success',response);
                  $scope.events = response.data;
                  $log.info($scope.events);
                  //$log.info(response.data);
              })
              .catch(function(response)
              {
                  console.log('failure',response);
              });
};
