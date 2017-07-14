
myApp.controller('contactsCtrl', function($scope, contactsService, $http) { 
   contactsService.getContacts().then(function(response) {
      $scope.monContact  = response.data;
   })
});
 