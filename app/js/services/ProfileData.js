'use strict';
module.exports = function ProfileData($http)
{
    return {
      getProfile: function(id)
      {
          return $http.get('data/profile/'+id+'.json');
      },

      save: function(profile)
      {
          return $http.post('data/profile/profilesave.jsp',profile);
      }
    };
};
