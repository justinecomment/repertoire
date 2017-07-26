myApp.service('categoriesService',function($http) {
    
    const baseUrl = 'http://localhost/repertoire';
    var categorieSaved;

    this.getCategorie = function(categorie){
        return categorie;
    }

    this.saveCategorie = function(categorie){
        categorieSaved = categorie;
    }

    this.getCategorieSaved = function(){
        return categorieSaved;
    }

    this.getCategories = function(){
    return $http.get(baseUrl + '/categories.php').success(function(result){
      JSON.stringify(result);
    })
  };

});
