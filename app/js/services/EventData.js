'use strict';
module.exports = function EventData($http)
{
  /*
    var resource = $resource('data/event/:id.json', {id: '@id'});
    return {
        getEvent: function()
        {
            return resource.get({id:1});
        },
        save: function(event)
        {
            event.id = 999;
            return resource.save(event);
        }
    };
    */

    return {
      getEvent: function()
      {
          return $http.get('data/event/1.json');
      },

      save: function(event)
      {
          return $http.post('data/event/eventsave.jsp',event);
      }

    };
};
