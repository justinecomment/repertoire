myApp.controller('addContactCtrl' ,function($scope, $http, $location, contactsService){
  $scope.validateForm = function(){
    if($scope.myAddForm.$valid == true){
      var formData = {
            'nom' :  $scope.nom,
            'prenom' : $scope.prenom,
            'email' : $scope.email,
        };
      contactsService.postContact(formData);
      alert("nouveau contact crée");
      contactsService.getContacts()
      $location.path('/contacts');
    };
  }
});
