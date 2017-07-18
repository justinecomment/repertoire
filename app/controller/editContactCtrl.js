myApp.controller('editContactCtrl', function($scope, $http, contactsService, $location){
    
    $scope.personne = contactsService.getPersonneSaved();
    
    $scope.UpdateData = function () {
        console.log($scope.personne);
        console.log($scope.personne.id);

            var data = $.param({
                id: $scope.personne.id,
                nom: $scope.nom,
                prenom: $scope.prenom,
                email: $scope.email
            });

            $http.put('http://localhost/repertoire/contacts.php?'+ data)
            .success(function (data, status, headers) {
                console.log("success " + data);
            })
            .error(function (data, status, header, config) {
                console.log("error " + data);
            });

            contactsService.getContacts();
            $location.path('/contacts');
        };

});
