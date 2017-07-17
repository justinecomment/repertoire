myApp.service('contactsService',function($http) {
    this.getContacts = function(){
    return $http.get('http://localhost/repertoire/contacts.php').success(function(result){
      JSON.stringify(result);
    })
  };

  this.postContact = function(dataToPost){
    return $http({ 
        method: 'POST', 
        url: 'http://localhost/repertoire/contacts.php', 
        dataType: 'json', 
        data: dataToPost,
        headers: {
          'Content-Type': 'application/json'
        }
    })
  }

  this.deleteContact = function(index){
    return $http({
      method  : 'DELETE',
      url: 'http://localhost/repertoire/contacts.php?id=' + index,
      data    : {"id":  index },
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
  }

});
