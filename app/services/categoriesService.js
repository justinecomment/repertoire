myApp.service('categoriesService',function($http) {
    
    const baseUrl = 'http://localhost/repertoire';
    var categorieSaved;

    this.getCategorie = function(categorie){
        return categorie;
    };

    this.saveCategorie = function(categorie){
        categorieSaved = categorie;
    };

    this.getCategorieSaved = function(){
        return categorieSaved;
    };

    this.getCategories = function(){
        return $http.get(baseUrl + '/categories.php').success(function(result){
            JSON.stringify(result);
        })
    };

    this.postCategorie = function(categorieToPost){
        return $http({
            method : 'POST',
            url : baseUrl + '/categories.php',
            dataType: 'json',
            data : categorieToPost,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    this.updateCategorie = function(categorieToUpdate){
        return $http({
            method : 'PUT',
            url : baseUrl + '/categories.php?category=',
            dataType: 'json',
            data : categorieToUpdate,
            headers: {
                'Content-Type': 'application/json'
            }
        })
    };

    this.deleteCategorie = function(index){
        return $http({
            method  : 'DELETE',
            url: baseUrl + '/categories.php?id=' + index,
            data    : {"id":  index },
            headers : {'Content-Type': 'application/x-www-form-urlencoded'}
        })
    };


});
