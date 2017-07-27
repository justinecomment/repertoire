myApp.controller('addCategoriesCtrl',function ($scope, $location, categoriesService) {

      $scope.submitCategorie = function(){
        if($scope.addCategorieForm.$valid === true){
            var formData = {
              'categorieName': $scope.categorieName
            };

            categoriesService.postCategorie(formData);
            categoriesService.saveCategorie($scope.categorieName);
            categoriesService.getCategorie($scope.categorieName);
            categoriesService.getCategories();
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
