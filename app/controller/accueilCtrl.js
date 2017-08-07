myApp.controller('accueilCtrl',function ($scope, contactsService, categoriesService, $http) {
   
   contactsService.getContacts().then(function(response) {
      $scope.totalContacts  = response.data.length;
      $scope.contacts = response.data;
   });

   categoriesService.getCategories().then(function(response) {
      $scope.totalCategories  = response.data.length -1;
      $scope.categories = response.data;
   });
});

