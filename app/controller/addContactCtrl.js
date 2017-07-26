myApp.controller('addContactCtrl' ,function($scope, $http, $location, contactsService, LxNotificationService){
  $scope.validateForm = function(){
    if($scope.myAddForm.$valid == true){
      var formData = {
            'nom' :  $scope.nom,
            'prenom' : $scope.prenom,
            'email' : $scope.email,
        };
      contactsService.postContact(formData);

      contactsService.getContacts();
      $location.path('/contacts');
      LxNotificationService.notify('Nouveau contact crée', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
    }
    else{
      $scope.myAddForm.$valid = false;
    }
  }

  $scope.onClickCancel = function(){
     $location.path('/contacts');
     LxNotificationService.notify('Annulé', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
  }
});

