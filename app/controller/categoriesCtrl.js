myApp.controller('categoriesCtrl',function ($scope, categoriesService) {
      
        var categorieRecovered = categoriesService.getCategorieSaved();
      
        categoriesService.getCategories();
        $("#categorie").append("<li> <div class='chip mr'> <span class='chip__label'>" + categorieRecovered + "</span> </div> </li>");
        categoriesService.getCategories().then(function(result){
            $scope.categoriesList  = result.data;
        })
      

});
