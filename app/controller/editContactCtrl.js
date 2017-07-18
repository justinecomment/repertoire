myApp.controller('editContactCtrl', function($scope, $http, contactsService, $location){
    
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
                console.log("success " + data);
                contactsService.getContacts();
                $location.path('/contacts');
            })
            .error(function (data) {
                console.log("error " + data);
            });
        }
        else{
            console.log('not valid');
        }
     }
    
    $scope.onClickCancel = function(){
        contactsService.getContacts();
        $location.path('/contacts');
    }
});
