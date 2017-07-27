myApp.controller('editCategoriesCtrl',function ($scope, $location, $http, categoriesService) {
    $scope.edit = "editer";
    $scope.categorieRecovered = categoriesService.getCategorieSaved();

    $scope.onClickCancel = function(){
        $location.path('/categories');
    }

    $scope.UpdateCategorie = function(){
        if($scope.editCategorie.$valid == true){
             var data = $.param({
                category: $scope.category,
                id : $scope.categorieRecovered.id
            });

            $http.put('http://localhost/repertoire/categories.php?'+ data)
            .success(function (result){
                 console.log(result);
                 categoriesService.getCategories();
                 $location.path('/categories');
            })
            .error(function (data){
                console.log("error");
            });
        }
    }
});
