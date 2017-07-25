
myApp.controller('contactsCtrl', function($scope, contactsService, $http, $window, $location ) {

   $scope.contactList = null;

   contactsService.getContacts().then(function(response) {
      $scope.contactList  = response.data;
   })

   $scope.deleteContact = function(index){
        $scope.index = this.contact.id;
        var nomContact = this.contact.prenom + ' ' +  this.contact.nom;
        var confirm = $window.confirm('voulez-vous supprimer' + nomContact + ' ?');

        if (confirm){
            contactsService.deleteContact($scope.index).then(function(response) {
                contactsService.getContacts().then(function(response) {
                    $scope.contactList  = response.data;
                    
                });
            });
        }
   }

    $scope.editContact = function(){
        contactsService.getPersonne(this.contact);
        contactsService.savePersonne(this.contact);
    }

    $scope.searchContact = function(){
        var stringToFind = $scope.searchForm.searchValue.$modelValue
        if(stringToFind != null){
            contactsService.searchPerson(stringToFind).then(function(response){
            $scope.contactList = response.data;})
        }
        else{
            console.log('get contacts');
            contactsService.getContacts().then(function(response) {
                $scope.contactList  = response.data;
            })
        }};

});