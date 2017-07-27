myApp.controller('categoriesCtrl',function ($scope, categoriesService,$route, $location, LxNotificationService) {
      
        $scope.categoriesList = null;

        categoriesService.getCategories().then(function(result){
            $scope.categoriesList = result.data;
        });

        //ajout d'un template catégorie
        var categorieRecovered = categoriesService.getCategorieSaved();
        $("#categorie").append("<li> <div class='chip mr'> <span class='chip__label'>" + categorieRecovered + "</span> </div> </li>");
        categoriesService.getCategories().then(function(result){
            $scope.categoriesList  = result.data;
        });
        
        $scope.editOrDelete= function(){
            var infosCategorie = categoriesService.getCategorie(this.categories);
            categoriesService.saveCategorie(this.categories);

            LxNotificationService.confirm('', 'Voulez-vous Editer ou supprimer?',
                {
                   cancel: 'Supprimer',
                   ok    : 'Editer'
                }, function(answer){
                    if (answer){
                        $location.path('/edit/categories');
                    }
                    else{
                        categoriesService.deleteCategorie(infosCategorie.id);
                        LxNotificationService.error('Catégorie supprimée');
                        $route.reload();
                    }
            });
            
       };


});
