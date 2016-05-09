'use strict';

module.exports =  function EditEventController($scope,eventData)
{
    $scope.saveEvent = function(event, newEventForm)
    {
        console.log(newEventForm);
        console.log(event);
        if (newEventForm.$valid)
        {
            eventData.save(event)
              .then(function(response) {console.log('success',response);})
              .catch(function(response) {console.log('failure',response);});
        }
        else
        {

        }
    };

    $scope.cancelEdit = function()
    {
      window.location = "EventDetails.html";
    };
};
