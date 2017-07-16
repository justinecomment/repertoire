
myApp.controller('contactsCtrl', function($scope, contactsService, $http, $window, $location) { 
   contactsService.getContacts().then(function(response) {
      $scope.contactList  = response.data;
   })

   $scope.deleteContact = function(index){
       $scope.index = this.contact.id;
       var nomContact = this.contact.prenom + ' ' +  this.contact.nom;
       var confirm = $window.confirm('voulez-vous supprimer' + nomContact + ' ?');
       console.log(this.contact);

       if (confirm){
            $http({ method  : 'DELETE',
                url     : 'http://localhost/repertoire/contacts.php?id=' + $scope.index,
                data    : {"id":  $scope.index },
                headers : {'Content-Type': 'application/x-www-form-urlencoded'}
            }).then(function(response) {
                contactsService.getContacts().then(function(response) {
      $scope.contactList  = response.data;
   });
                $location.path('/contacts');
             
            });

       }
   }
});
 