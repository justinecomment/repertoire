myApp.controller('editContactCtrl', function($scope, $http, contactsService, $location, LxNotificationService){
    
    $scope.personne = contactsService.getPersonneSaved();

     $scope.UpdateData = function () {
         if($scope.myEditForm.$valid == true){
            var data = $.param({
                id: $scope.personne.id,
                nom: $scope.nom,
                prenom: $scope.prenom,
                email: $scope.email
            });

            $http.put('http://localhost/repertoire/contacts.php?'+ data)
            .success(function (data) {
                contactsService.getContacts();
                $location.path('/contacts');
                LxNotificationService.notify('Modifications enregistrées', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
            })
            .error(function (data) {
                console.log("error " + data);
            });
        }
     }
    
    $scope.onClickCancel = function(){
        contactsService.getContacts();
        $location.path('/contacts');
        LxNotificationService.notify('Annulé', undefined, undefined, undefined, undefined, undefined, 2 * 1000);
    }

});


