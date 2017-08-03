
myApp.controller('contactsCtrl', function($scope, contactsService, categoriesService, $http, $window, $location, LxNotificationService ) {

   $scope.contactList = null;
   $scope.categoriesList = null;

   
   categoriesService.getCategories().then(function(response){
      $scope.categoriesList = response.data;
      console.log($scope.categoriesList);
   });


   contactsService.getContacts().then(function(response) {
      $scope.contactList  = response.data;
      console.log($scope.contactList);
   });

    $scope.editContact = function(){
        contactsService.getPersonne(this.contact);
        contactsService.savePersonne(this.contact);
    };


    $scope.searchContact = function(){
        var stringToFind = $scope.searchForm.searchValue.$modelValue;
        if(stringToFind != null){
            contactsService.searchPerson(stringToFind).then(function(response){
            $scope.contactList = response.data})
        }
        else{
            contactsService.getContacts().then(function(response) {
                $scope.contactList  = response.data;
            })
        }
    };


    $scope.deleteContact = function (){
        var nomContact = this.contact.prenom_contacts + ' ' +  this.contact.nom_contacts;
        var index = this.contact.id_contacts;

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
        })
    };


    $scope.chooseCategorie = function(){
        var data =  {'join' : this.selectCategorie, 'id_contact' : this.contact.id_contacts};
        contactsService.joinCategorie(data);
    }

});