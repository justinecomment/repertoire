myApp.controller('categoriesCtrl',function ($scope, categoriesService) {
      $scope.categories  = "Mes Catégories";
      $scope.famille = "Famille";
      $scope.categorie = categoriesService.getCategorieSaved();
     
      $("#categorie").append("<li> <div class='chip chip--is-deletable mr'> <span class='chip__label'>" +  $scope.categorie + "</span> </div> </li>");
      
      categoriesService.getCategories().then(function(result) {
        $scope.categorieList  = result.data;
      })

});
