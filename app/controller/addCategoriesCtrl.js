myApp.controller('addCategoriesCtrl',function ($scope, $location, categoriesService) {
      $scope.addCategories  = "Add Catégories";
     
      $scope.submitCategorie = function(){
        var categorieName = $scope.addCategorieForm.categorieName.$viewValue;
        if($scope.addCategorieForm.$valid == true){
            categoriesService.getCategorie(categorieName);
            categoriesService.saveCategorie(categorieName);
            $location.path('/categories');
        }
        else{
            console.log('error');
        }
      }

      $scope.onClickCancel = function(){
        $location.path('/categories');
      }
});
