'use strict';
module.exports = function EventData($http)
{
    return {
      getEvent: function(eventId)
      {
          return $http.get('data/event/'+eventId+".json");
      },

      save: function(event)
      {
          return $http.post('data/event/eventsave.jsp',event);
      },

      getAllEvents: function()
      {
          return $http.get('data/event/getevents.jsp');
      }
    };
};
