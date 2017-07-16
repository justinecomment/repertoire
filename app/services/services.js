myApp.service('contactsService',function($http) {
    this.getContacts = function(){
    return $http.get('http://localhost/repertoire/contacts.php').success(function(result){
      JSON.stringify(result);
    })
  };

  this.postContact = function(dataToPost){
    return $http({ 
        url: 'http://localhost/repertoire/contacts.php', 
        dataType: 'json', 
        method: 'POST', 
        data: dataToPost,
        headers: {
          'Content-Type': 'application/json'
        }
    })
  }


});
