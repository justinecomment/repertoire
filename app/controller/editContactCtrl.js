myApp.controller('editContactCtrl', function($scope, $http, contactsService){
    
 $scope.personne = contactsService.getPersonneSaved();
    console.log($scope.personne);
});
