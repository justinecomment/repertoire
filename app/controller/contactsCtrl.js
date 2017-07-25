
myApp.controller('contactsCtrl', function($scope, contactsService, $http, $window, $location, LxNotificationService ) {

   $scope.contactList = null;


   contactsService.getContacts().then(function(response) {
      $scope.contactList  = response.data;
   })


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

    $scope.deleteContact = function (){
        var nomContact = this.contact.prenom + ' ' +  this.contact.nom;
        var index = this.contact.id;

        LxNotificationService.confirm('Voulez-vous supprimer ce contact?', nomContact,
        {
            ok: 'Supprimer',
            cancel: 'Cancel'
            
        }, function(answer)
        {
            if (answer)
            {
                contactsService.deleteContact(index).then(function(response) {
                    contactsService.getContacts().then(function(response) {
                        $scope.contactList  = response.data;
                    });
                });

                LxNotificationService.success('Contact supprimé');
            }
            else
            {
                LxNotificationService.error('Aucun contact n\'a été supprimé');
            }
        });
    }

});