myApp.config(['$routeProvider', function ($routeProvider) {
  $routeProvider
  .when('/', {
    controller: 'accueilCtrl',
    templateUrl: 'view/accueil.html'
  })
  .when('/contacts', {
    controller: 'contactsCtrl',
    templateUrl: 'view/contacts/contacts.html'
  })
  .when('/add', {
    controller:'addContactCtrl',
    templateUrl:'view/contacts/addContact.html'
  })
  .when('/edit',{
    controller: 'editContactCtrl',
    templateUrl: 'view/contacts/editContact.html'
  })
  .when('/categories',{
    controller: 'categoriesCtrl',
    templateUrl: 'view/categories/categories.html'
  })
  .when('/add/categories',{
    controller: 'addCategoriesCtrl',
    templateUrl: 'view/categories/addCategories.html'
  })
  .when('/edit/categories',{
    controller: 'editCategoriesCtrl',
    templateUrl: 'view/categories/editCategories.html'
  })
  .otherwise({
    redirectTo: '/'
  });
}]);


