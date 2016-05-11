'use strict';

module.exports = function EditProfileController($scope,$window,profileData) {

    $scope.saveProfile = function(profile, editProfileForm) {

        if (editProfileForm.$valid)
        {
            profileData.save(profile)
              .then(function(response) {console.log('success',response);})
              .catch(function(response) {console.log('failure',response);});
        }
        else
        {
            $window.alert("Form Invalid");
        }
    };

    $scope.cancelEdit = function()
    {
      $window.location = "index.html";
    };
};
