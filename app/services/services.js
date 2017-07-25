myApp.service('contactsService',function($http) {

  const baseUrl = 'http://localhost/repertoire';
  var personneSaved;
  

  this.getPersonne = function(personne){
     return personne;
  }

  this.savePersonne = function(personne){
    personneSaved = personne;
  }

  this.getPersonneSaved = function(){
    return personneSaved;
  }


  this.searchPerson = function(searchvalue){
    return $http.get(baseUrl + '/contacts.php?search=' + searchvalue).success(function(result){
      JSON.stringify(result.data);
    })
  }


  this.getContacts = function(){
    return $http.get(baseUrl + '/contacts.php').success(function(result){
      JSON.stringify(result);
    })
  };


  this.postContact = function(dataToPost){
    return $http({ 
        method: 'POST', 
        url: baseUrl + '/contacts.php', 
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
      url: baseUrl + '/contacts.php?id=' + index,
      data    : {"id":  index },
      headers : {'Content-Type': 'application/x-www-form-urlencoded'}
    })
  }



});
